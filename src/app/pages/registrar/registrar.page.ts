import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { UserDataService } from "src/app/services/cliente-service.service";
import { Router } from "@angular/router";

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
		private userData: UserDataService,
		private toastController: ToastController,
		private router: Router
	) {}

	async register() {
		try {
			const result = await this.userData.createUser(
				this.email,
				this.password,
				this.nome
			);

			console.log("Registro realizado com sucesso!");
		} catch (error) {
			console.error("Erro no registro!");
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
