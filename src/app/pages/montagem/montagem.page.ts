import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FavoriteService } from "src/app/services/favoritos.service";
import { Ingredient } from "src/app/models/ingredientes/ingredientes";
import { UserDataService } from "src/app/services/cliente-service.service";

@Component({
	selector: "app-montagem",
	templateUrl: "./montagem.page.html",
	styleUrls: ["./montagem.page.scss"],
})
export class MontagemPage implements OnInit {
	ingredients: Ingredient[] = []; // List of available ingredients
	selectedIngredients: { ingredient: Ingredient; quantidade: number }[] = []; // List of selected ingredients with quantities
	snackName: string = ""; // Name for the burger
	totalCalories: number = 0; // Total calories of the burger
	userId: string | null = null; // Current user's ID

	constructor(
		private dataService: UserDataService,
		private favoriteService: FavoriteService,
		private firestore: AngularFirestore
	) {}

	ngOnInit() {}

	ionViewWillEnter() {
		// Load available ingredients with tiposLanche[] containing "hamburguer"
		// Replace with your logic to fetch ingredients
		this.loadIngredients();

		// Get the current user
		this.dataService.getCurrentUser().subscribe((user) => {
			if (user) {
				this.userId = user.uid;
			} else {
				this.userId = null;
			}
		});
	}

	loadIngredients() {
		// Implement logic to load ingredients with tiposLanche[] containing "hamburguer"
		// Replace this.ingredients with the loaded ingredients
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

		// Calculate and update the total calories
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
				nome: this.snackName,
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

	ingredientquantidade(ingredient: Ingredient): number {
		const selectedIngredient = this.selectedIngredients.find(
			(item) => item.ingredient.id === ingredient.id
		);

		return selectedIngredient ? selectedIngredient.quantidade : 0;
	}
}
