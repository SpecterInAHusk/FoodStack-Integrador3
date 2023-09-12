import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Lanche } from "../models/produtos/lanche";

@Injectable({
	providedIn: "root",
})
export class FavoriteService {
	constructor(private firestore: AngularFirestore) {}

	

	//Adicionar Favorito a partir de um lanche pronto
	addFavoriteSnack(userId: string, favoriteId: string, lanche: Lanche) {
		return this.firestore
			.collection(`favoritos/${userId}/lanches`)
			.doc(favoriteId)
			.set(lanche);
	}

	//Buscar Favoritos
	getFavoriteSnacks(userId: string) {
		return this.firestore
			.collection(`favoritos/${userId}/lanches`)
			.valueChanges();
	}
	
	// Remover favorito
	removeFavoriteSnack(userId: string, favoriteSnackId: string) {
		return this.firestore
			.collection(`favoritos/${userId}/lanches`)
			.doc(favoriteSnackId)
			.delete();
	}
}
