import { Ingredient } from "../ingredientes/ingredientes";

export class Pizza {
    imagem: any;
    nome: string;
    pizza: Ingredient[];
    calories: number;

    constructor() {
        this.imagem = ''
        this.nome = ''
        this.pizza = [];
        this.calories = 0;
    }

    addPart(part: Ingredient) {
        this.pizza.push(part);
        this.calories += part.calories;
    }

    removePart(part: Ingredient) {
        const index = this.pizza.indexOf(part)
        this.pizza.splice(index, 1);
        this.calories -= part.calories;
    }

    getCalories() {
        return this.calories;
    }
}
