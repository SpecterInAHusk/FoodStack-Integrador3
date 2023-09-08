import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ToastController } from "@ionic/angular"; // Import ToastController

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
		private toastController: ToastController // Inject ToastController
	) {}

	async login() {
		try {
			const result = await this.afAuth.signInWithEmailAndPassword(
				this.email,
				this.password
			);

			// Display a success message using Ion Toast
			this.presentToast("Login successful.");

			console.log("Login successful:", result.user);
		} catch (error) {
			// Display an error message using Ion Toast
			this.presentToast("Login error: " + ((error as any).message));

			console.error("Login error:", error);
		}
	}

	async presentToast(message: string) {
		const toast = await this.toastController.create({
			message: message,
			duration: 3000, // Display for 3 seconds
			position: "top",
		});
		toast.present();
	}
}
