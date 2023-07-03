import { Ingredient } from "../ingredientes/ingredientes";

export class Hamburguer {
    nome: string;
    burger: Ingredient[];
    calories: number;

    constructor() {
        this.burger = [];
        this.calories = 0;
    }

    addPart(part: Ingredient) {
        this.burger.push(part);
        this.calories += part.calories;
    }

    removePart(part: Ingredient) {
        const index = this.burger.indexOf(part)
        this.burger.splice(index, 1);
        this.calories -= part.calories;
    }

    getCalories() {
        return this.calories;
    }
}