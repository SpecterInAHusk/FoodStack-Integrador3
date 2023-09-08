import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ToastController } from "@ionic/angular"; 

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"],
})
export class LoginPage {
	email: string = "";
	password: string = "";

	constructor(
		private afAuth: AngularFireAuth,
		private toastController: ToastController
	) {}

	async login() {
		try {
			const result = await this.afAuth.signInWithEmailAndPassword(
				this.email,
				this.password
			);

			// Mensagem de sucesso
			this.presentToast("Login efetuado com sucesso!.");

			console.log("Login efetuado com sucesso:", result.user);
		} catch (error) {
			// Mensagem de erro
			this.presentToast("Falha no login: " + ((error as any).message));

			console.error("Falha no login:", error);
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
