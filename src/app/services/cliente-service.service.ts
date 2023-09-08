import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { User } from "../models/cliente/user";
import { map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UserDataService {
	constructor(private db: AngularFireDatabase) {}

	createUser(user: User): Promise<void> {
		const userId = user.id;
		return this.db.object(`/users/${userId}`).set(user);
	}

	getUserById(id: string): Observable<User | null> {
		return this.db
			.object<User>(`/users/${id}`)
			.valueChanges()
			.pipe(
				map((user) => user || null) // Handle null result
			);
	}

	updateUser(id: string, user: User): Promise<void> {
		return this.db.object(`/users/${id}`).update(user);
	}
}
