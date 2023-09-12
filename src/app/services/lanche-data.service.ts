import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Lanche } from "../models/produtos/lanche";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class LancheDataService {
	constructor(private firestore: AngularFirestore) {}

	createLanche(lanche: Lanche): Promise<void> {
		const lancheId = this.firestore.createId();
		return this.firestore.collection("lanches").doc(lancheId).set(lanche);
	}

	getAllLanches(): Observable<Lanche[]> {
		return this.firestore.collection<Lanche>("lanches").valueChanges();
	}

	getLancheById(id: string): Observable<Lanche | null> {
		return this.firestore
			.collection("lanches")
			.doc<Lanche>(id)
			.valueChanges()
			.pipe(
				map((lanche) => lanche || null) // Handle null result
			);
	}

	updateLanche(id: string, lanche: Lanche): Promise<void> {
		return this.firestore.collection("lanches").doc(id).update(lanche);
	}

	deleteLanche(id: string): Promise<void> {
		return this.firestore.collection("lanches").doc(id).delete();
	}

	searchSnacksByAutor(autor: string): Observable<Lanche[]> {
		return this.firestore
			.collection<Lanche>("lanches", (ref) =>
				ref.where("autor", "==", autor)
			)
			.valueChanges();
	}

	searchSnacksByNome(nome: string): Observable<Lanche[]> {
		return this.firestore
			.collection<Lanche>("lanches", (ref) =>
				ref.where("nome", "==", nome)
			)
			.valueChanges();
	}

	searchSnacksByCategory(category: string): Observable<Lanche[]> {
		return this.firestore
			.collection<Lanche>("lanches", (ref) =>
				ref.where("tipo", "==", category)
			)
			.valueChanges();
	}
}
