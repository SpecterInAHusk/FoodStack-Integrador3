import { Ingredient } from "../ingredientes/ingredientes";

export class HotDog {
    nome: string;
    hotdog: Ingredient[];
    calories: number;

    constructor() {
        this.hotdog = [];
        this.calories = 0;
    }

    addPart(part: Ingredient) {
        this.hotdog.push(part);
        this.calories += part.calories;
    }
    removePart(part: Ingredient) {
        const index = this.hotdog.indexOf(part)
        this.hotdog.splice(index, 1);
        this.calories -= part.calories;
    }
    getCalories() {
        return this.calories;
    }
}
