import { Injectable } from '@angular/core';
import { Favoritos } from '../models/favoritos/favoritos';
import { Ingredient } from '../models/ingredientes/ingredientes';
import { Hamburguer } from '../models/produtos/hamburger';
import { HotDog } from '../models/produtos/hot-dog';
import { Pizza } from '../models/produtos/pizza';

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {
    constructor() {
    }
    lanches: {
        burger: Hamburguer[],
        hotDog: HotDog[],
        pizza: Pizza[],
    };

    adicionarFavorito(lanche: Hamburguer): void {
        this.hamburgueres.push(lanche);
    }

    removerFavorito(lanche: Hamburguer | HotDog | Pizza): void {
        switch (lanche.constructor) {
            case Hamburguer:
                this.lanches.burger = this.lanches.burger.filter((item) => item.nome !== lanche.nome);
                break;
            case HotDog:
                this.lanches.hotDog = this.lanches.hotDog.filter((item) => item.nome !== lanche.nome);
                break;
            case Pizza:
                this.lanches.pizza = this.lanches.pizza.filter((item) => item.nome !== lanche.nome);
                break;
            default:
                throw new Error('Lanche inválido.');
        }
    }
    hamburgueres: Hamburguer[] = []
    obterPizza(): Pizza[] {
        return this.lanches.pizza;
    }
    obterHotDog(): HotDog[] {
        return this.lanches.hotDog;
    }
    obterHamburguer(): Hamburguer[] {
        return this.hamburgueres;
    }
}
