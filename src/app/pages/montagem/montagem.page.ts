import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FavoriteService } from "src/app/services/favoritos.service";
import { Ingredient } from "src/app/models/ingredientes/ingredientes";
import { UserDataService } from "src/app/services/cliente-service.service";
import { IngredientDataService } from "src/app/services/ingrediente-service";

@Component({
	selector: "app-montagem",
	templateUrl: "./montagem.page.html",
	styleUrls: ["./montagem.page.scss"],
})
export class MontagemPage implements OnInit {
	ingredients: Ingredient[] = []; // Lista dos ingredientes disponíveis
	selectedIngredients: { ingredient: Ingredient; quantidade: number }[] = []; // Lista dos ingredientes selecionados com suas quantidades
	lancheName: string = "";
	totalCalories: number = 0;
	userId: string | null = null;
	filteredIngredients: Ingredient[] = [];
	categories: string[] = [];
	selectedCategories: string[] = [];

	constructor(
		private dataService: UserDataService,
		private favoriteService: FavoriteService,
		private firestore: AngularFirestore,
		private ingredientService: IngredientDataService
	) {}

	ngOnInit() {
		this.loadIngredients();

		this.dataService.getCurrentUser().subscribe((user) => {
			if (user) {
				this.userId = user.uid;
			} else {
				this.userId = null;
			}
		});
	}

	loadIngredients() {
		this.ingredientService
			.searchIngredientsByTypesLanche(["hamburguer"])
			.subscribe((ingredients) => {
				this.ingredients = ingredients;
			});
	}

	addIngredient(ingredient: Ingredient) {
		// Check if the ingredient is already selected
		const existingIngredient = this.selectedIngredients.find(
			(item) => item.ingredient.id === ingredient.id
		);

		if (existingIngredient) {
			// Increment the quantidade if the ingredient is already selected
			existingIngredient.quantidade++;
		} else {
			// Add the ingredient with quantidade 1 if it's not selected
			this.selectedIngredients.push({ ingredient, quantidade: 1 });
		}

		this.totalCalories += ingredient.calorias;
	}

	removeIngredient(ingredient: Ingredient) {
		// Find the selected ingredient
		const existingIngredient = this.selectedIngredients.find(
			(item) => item.ingredient.id === ingredient.id
		);

		if (existingIngredient) {
			// Decrement the quantidade
			existingIngredient.quantidade--;

			// If the quantidade reaches zero, remove the ingredient
			if (existingIngredient.quantidade === 0) {
				const index =
					this.selectedIngredients.indexOf(existingIngredient);
				if (index !== -1) {
					this.selectedIngredients.splice(index, 1);
				}
			}

			// Calculate and update the total calories
			this.totalCalories -= ingredient.calorias;
		}
	}

	saveBurger() {
		if (this.userId) {
			// Create a burger object with the selected ingredients and other details
			const newId = this.firestore.createId();
			const burger = {
				id: newId,
				tipo: "hamburguer",
				nome: this.lancheName,
				calorias: this.totalCalories,
				autor: this.userId,
				ingredientes: this.selectedIngredients.map((item) => ({
					id: item.ingredient.id,
					quantidade: item.quantidade,
				})),
			};

			// Save the burger using your favoriteService
			this.favoriteService
				.addFavoriteSnack(this.userId, newId, burger)
				.then(() => {
					// Successfully saved
					console.log("Burger saved as a favorite.");
				})
				.catch((error) => {
					// Handle error
					console.error("Error saving burger:", error);
				});
		}
	}
	filterByCategory() {
		if (this.selectedCategories.length === 0) {
			this.filteredIngredients = this.ingredients;
		} else {
			this.filteredIngredients = this.ingredients.filter((ingredient) =>
				this.selectedCategories.includes(ingredient.categoria)
			);
		}
	}

	toggleCategory(category: string) {
		const index = this.selectedCategories.indexOf(category);
		if (index === -1) {
			this.selectedCategories.push(category);
		} else {
			this.selectedCategories.splice(index, 1);
		}
		this.filterByCategory();
	}

	ingredientQuantidade(ingredient: Ingredient): number {
		const selectedIngredient = this.selectedIngredients.find(
			(item) => item.ingredient.id === ingredient.id
		);

		return selectedIngredient ? selectedIngredient.quantidade : 0;
	}
isSelectedCategory(category: string): boolean {
    return this.selectedCategories.includes(category);
  }
}
