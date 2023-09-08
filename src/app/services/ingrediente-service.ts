import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Ingredient } from "../models/ingredientes/ingredientes";
import { map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class IngredientDataService {
	constructor(private db: AngularFireDatabase) {}

	// Create a new ingredient
	createIngredient(ingredient: Ingredient): Promise<void> {
		const ingredientId = this.db.createPushId();
		return this.db.object(`/ingredients/${ingredientId}`).set(ingredient);
	}

	// Get all ingredients
	getAllIngredients(): Observable<Ingredient[]> {
		return this.db.list<Ingredient>("/ingredients").valueChanges();
	}

	// Get an ingredient by ID
	getIngredientById(id: string): Observable<Ingredient | null> {
		return this.db
			.object<Ingredient>(`/ingredients/${id}`)
			.valueChanges()
			.pipe(
				map((ingredient) => ingredient || null) // Handle null result
			);
	}

	// Update an ingredient
	updateIngredient(id: string, ingredient: Ingredient): Promise<void> {
		return this.db.object(`/ingredients/${id}`).update(ingredient);
	}

	// Delete an ingredient
	deleteIngredient(id: string): Promise<void> {
		return this.db.object(`/ingredients/${id}`).remove();
	}
	// Search for ingredients by category (categoria)
	searchIngredientsByCategory(categoria: string): Observable<Ingredient[]> {
		return this.db
			.list<Ingredient>("/ingredients", (ref) =>
				ref.orderByChild("categoria").equalTo(categoria)
			)
			.valueChanges();
	}

	// Search for ingredients by name (nome)
	searchIngredientsByName(nome: string): Observable<Ingredient[]> {
		return this.db
			.list<Ingredient>("/ingredients", (ref) =>
				ref.orderByChild("nome").equalTo(nome)
			)
			.valueChanges();
	}

	// Search for ingredients by types of snacks (tiposLanche)
	searchIngredientsByTypesLanche(
		tiposLanche: string[]
	): Observable<Ingredient[]> {
		return this.db
			.list<Ingredient>("/ingredients", (ref) => {
				return ref
					.orderByChild("tiposLanche")
					.startAt(tiposLanche[0])
					.endAt(tiposLanche[tiposLanche.length - 1]);
			})
			.valueChanges();
	}
}
