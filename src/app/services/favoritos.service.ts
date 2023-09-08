import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
	providedIn: "root",
})
export class FavoriteService {
	constructor(private firestore: AngularFirestore) {}

	
	//Adicionar Favorito
	addFavoriteSnack(userId: string, favoriteSnackId: string, snackData: any) {
		return this.firestore
			.collection(`favorites/${userId}/snacks`)
			.doc(favoriteSnackId)
			.set(snackData);
	}

	//Buscar Favoritos
	getFavoriteSnacks(userId: string) {
		return this.firestore
			.collection(`favorites/${userId}/snacks`)
			.valueChanges();
	}
	
	// Remover favorito
	removeFavoriteSnack(userId: string, favoriteSnackId: string) {
		return this.firestore
			.collection(`favorites/${userId}/snacks`)
			.doc(favoriteSnackId)
			.delete();
	}
}
