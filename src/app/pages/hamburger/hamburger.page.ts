import { Component, OnInit } from "@angular/core";
import { IngredientDataService } from "src/app/services/ingrediente-service";

@Component({
	selector: "app-hamburger",
	templateUrl: "./hamburger.page.html",
	styleUrls: ["./hamburger.page.scss"],
})
export class HamburgerPage implements OnInit {
	// ... (other properties)

	selectedBreadType: string = ""; // Limitação de quantidade de pães
	breadTypes: string[] = [];

	constructor(private ingredienteService: IngredienteService) {}

	ngOnInit() {
		// Fetch bread types from the database based on the "bread" ingredient category
		this.ingredienteService
			.searchIngredientsByCategory("bread")
			.subscribe((ingredients) => {
				// Extract bread types from the ingredients
				this.breadTypes = ingredients.map(
					(ingredient) => ingredient.nome
				);
			});
	}

	// ... (other methods)
}
