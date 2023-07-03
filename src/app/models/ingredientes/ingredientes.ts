export class Ingredient {
    type: string;
    id?: string;
    name: string;
    category: string;
    calories: number;
    quantity: number;
    constructor(nome: string, calorias: number) {
        this.type = "";
        this.name = nome;
        this.category = "";
        this.calories = calorias;
        this.quantity = 0;
    }
}