import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Ingredient } from "../models/ingredientes/ingredientes";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class IngredientDataService {
	constructor(private firestore: AngularFirestore) {}

	createIngredient(ingredient: Ingredient): Promise<void> {
		const ingredientId = this.firestore.createId();
		return this.firestore
			.collection("ingredients")
			.doc(ingredientId)
			.set(ingredient);
	}

	getAllIngredients(): Observable<Ingredient[]> {
		return this.firestore
			.collection<Ingredient>("ingredients")
			.valueChanges();
	}

	getIngredientById(id: string): Observable<Ingredient | null> {
		return this.firestore
			.collection("ingredients")
			.doc<Ingredient>(id)
			.valueChanges()
			.pipe(
				map((ingredient) => ingredient || null) // Handle null result
			);
	}

	updateIngredient(id: string, ingredient: Ingredient): Promise<void> {
		return this.firestore
			.collection("ingredients")
			.doc(id)
			.update(ingredient);
	}

	deleteIngredient(id: string): Promise<void> {
		return this.firestore.collection("ingredients").doc(id).delete();
	}

	searchIngredientsByCategory(categoria: string): Observable<Ingredient[]> {
		return this.firestore
			.collection<Ingredient>("ingredients", (ref) =>
				ref.where("categoria", "==", categoria)
			)
			.valueChanges();
	}

	searchIngredientsByName(nome: string): Observable<Ingredient[]> {
		return this.firestore
			.collection<Ingredient>("ingredients", (ref) =>
				ref.where("nome", "==", nome)
			)
			.valueChanges();
	}

	searchIngredientsByTypesLanche(
		tiposLanche: string[]
	): Observable<Ingredient[]> {
		return this.firestore
			.collection<Ingredient>("ingredients", (ref) =>
				ref.where("tiposLanche", "array-contains-any", tiposLanche)
			)
			.valueChanges();
	}
}
