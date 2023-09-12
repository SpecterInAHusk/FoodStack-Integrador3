import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";
import { User } from "../models/cliente/user";
import { map, switchMap } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class UserDataService {
	constructor(
		private afAuth: AngularFireAuth,
		private firestore: AngularFirestore
	) {}

	// Register a user with email and password
	async createUser(
		email: string,
		password: string,
		nome: string
	): Promise<void> {
		try {
			const { user } = await this.afAuth.createUserWithEmailAndPassword(
				email,
				password
			);

			// Add additional user data to Firestore
			if (user) {
				const userData: User = {
					id: user.uid,
					email: user.email || "",
					nome: nome,
				};
				await this.firestore
					.collection("users")
					.doc(user.uid)
					.set(userData);
			}
		} catch (error) {
			throw error;
		}
	}

	// Login with email and password
	async loginUser(email: string, password: string): Promise<void> {
		try {
			await this.afAuth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			throw error;
		}
	}

	// Logout the user
	async logoutUser(): Promise<void> {
		try {
			await this.afAuth.signOut();
		} catch (error) {
			throw error;
		}
	}

	// Reset password
	async resetPassword(email: string): Promise<void> {
		try {
			await this.afAuth.sendPasswordResetEmail(email);
		} catch (error) {
			throw error;
		}
	}

	// Get user by ID
	getUserById(id: string): Observable<User | null> {
		return this.afAuth.authState.pipe(
			switchMap((user) => {
				if (user) {
					return this.firestore
						.collection("users")
						.doc<User>(id)
						.valueChanges();
				} else {
					return [];
				}
			}),
			map((user) => user || null)
		);
	}

	// Update user profile
	async updateUser(id: string, user: User): Promise<void> {
		try {
			await this.firestore.collection("users").doc(id).update(user);
		} catch (error) {
			throw error;
		}
	}

	// Sair
	signOut() {
		return this.afAuth.signOut();
	}

	// Retornar usuário logado
	getCurrentUser() {
		return this.afAuth.authState;
	}
}
