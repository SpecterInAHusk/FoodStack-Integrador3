import { Component } from "@angular/core";
import { UserDataService } from "src/app/services/cliente-service.service";
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
		private userData: UserDataService,
		private toastController: ToastController
	) {}

	async login() {
		try {
			const result = await this.userData.loginUser(
				this.email,
				this.password
			);

			// Mensagem de sucesso
			this.presentToast("Login efetuado com sucesso!");

		} catch (error) {
			// Mensagem de erro
			this.presentToast("Falha no login!");

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
