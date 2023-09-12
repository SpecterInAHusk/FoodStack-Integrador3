import { Component, OnInit } from "@angular/core";
import { FavoriteService } from "src/app/services/favoritos.service";
import { UserDataService } from "src/app/services/cliente-service.service";
import { Observable } from "rxjs";
import { Lanche } from "src/app/models/produtos/lanche";
import { map } from "rxjs";

@Component({
	selector: "app-perfil",
	templateUrl: "./perfil.page.html",
	styleUrls: ["./perfil.page.scss"],
})
export class PerfilPage implements OnInit {
	userId: string;
	lanchesFavoritos$: Observable<Lanche[]>;

	constructor(
		private favoriteService: FavoriteService,
		private authService: UserDataService
	) {}

	ngOnInit() {
		this.authService.getCurrentUser().subscribe((user) => {
			if (user) {
				this.userId = user.uid;
				this.loadFavoriteSnacks();
			}
		});
	}

	loadFavoriteSnacks() {
		if (this.userId) {
			this.lanchesFavoritos$ = this.favoriteService
				.getFavoriteSnacks(this.userId)
				.pipe(map((lanches) => lanches as Lanche[]));
		}
	}

	sairConta() {
		window.location.replace("/login");
	}
}
