import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { Lanche } from "../models/produtos/lanche";
import { map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LancheDataService {
	constructor(private db: AngularFireDatabase) {}

	createLanche(lanche: Lanche): Promise<void> {
		const lancheId = this.db.createPushId();
		return this.db.object(`/lanches/${lancheId}`).set(lanche);
	}

	getAllLanches(): Observable<Lanche[]> {
		return this.db.list<Lanche>("/lanches").valueChanges();
	}

	getLancheById(id: string): Observable<Lanche | null> {
		return this.db
			.object<Lanche>(`/lanches/${id}`)
			.valueChanges()
			.pipe(
				map((lanche) => lanche || null) // Handle null result
			);
	}

	updateLanche(id: string, lanche: Lanche): Promise<void> {
		return this.db.object(`/lanches/${id}`).update(lanche);
	}

	deleteLanche(id: string): Promise<void> {
		return this.db.object(`/lanches/${id}`).remove();
	}

	searchSnacksByAutor(autor: string): Observable<Lanche[]> {
		return this.db
			.list<Lanche>("/lanches", (ref) =>
				ref.orderByChild("autor").equalTo(autor)
			)
			.valueChanges();
	}

	searchSnacksByNome(nome: string): Observable<Lanche[]> {
		return this.db
			.list<Lanche>("/lanches", (ref) =>
				ref.orderByChild("nome").equalTo(nome)
			)
			.valueChanges();
	}

	searchSnacksByCategory(category: string): Observable<Lanche[]> {
		return this.db
			.list<Lanche>("/lanches", (ref) =>
				ref.orderByChild("tipo").equalTo(category)
			)
			.valueChanges();
	}
}
