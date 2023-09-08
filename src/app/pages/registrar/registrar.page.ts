import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ToastController } from "@ionic/angular";

@Component({
	selector: "app-registrar",
	templateUrl: "./registrar.page.html",
	styleUrls: ["./registrar.page.scss"],
})
export class RegistrationPage {
	email: string = "";
	password: string = "";
	nome: string = "";

	constructor(
		private afAuth: AngularFireAuth,
		private toastController: ToastController
	) {}

	async register() {
		try {
			const result = await this.afAuth.createUserWithEmailAndPassword(
				this.email,
				this.password
			);

			// Atualizar o nome do usuário
			await result.user?.updateProfile({ displayName: this.nome });

			// Successful registration
			console.log("Registration successful:", result.user);
		} catch (error) {
			console.error("Registration error:", error);
		}
	}

	async presentToast(message: string) {
		const toast = await this.toastController.create({
			message: message,
			duration: 3000, // Mostrar por 3s
			position: "top",
		});
		toast.present();
	}
}
