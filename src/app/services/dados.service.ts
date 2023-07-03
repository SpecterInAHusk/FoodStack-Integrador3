import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredientes/ingredientes';

@Injectable({
    providedIn: 'root'
})
export class DadosService {

    constructor() { }
    vegetais = [
        {
            name: "alface",
            type: "hamburguer",
            category: "vegetal",
            calories: 10,
            quantity: 0,
        },
        {
            name: "tomate",
            type: "hamburguer",
            category: "vegetal",
            calories: 15,
            quantity: 0,
        },
        {
            name: "cebola",
            type: "hamburguer",
            category: "vegetal",
            calories: 20,
            quantity: 0,
        },
        {
            name: "pepino",
            type: "hamburguer",
            category: "vegetal",
            calories: 5,
            quantity: 0,
        },
        {
            name: "pimentão",
            type: "hamburguer",
            category: "vegetal",
            calories: 25,
            quantity: 0,
        },
    ];
    proteinas = [{
        name: "carne",
        type: "hamburguer",
        category: "proteina",
        calories: 200,
        quantity: 0,
    },
    {
        name: "frango",
        type: "hamburguer",
        category: "proteina",
        calories: 150,
        quantity: 0,
    },
    {
        name: "peixe",
        type: "hamburguer",
        category: "proteina",
        calories: 100,
        quantity: 0,
    }];
    paes = [
        {
            name: "pão de hambúrguer com gergelim",
            type: "hamburguer",
            category: "pão",
            calories: 150,
            quantity: 0
        },
        {
            name: "pão de hambúrguer com queijo",
            type: "hamburguer",
            category: "pão",
            calories: 180,
            quantity: 0
        },
        {
            name: "pão de hambúrguer integral",
            type: "hamburguer",
            category: "pão",
            calories: 120,
            quantity: 0
        },
        {
            name: "pão de hambúrguer com gergelim preto",
            type: "hamburguer",
            category: "pão",
            calories: 170,
            quantity: 0
        },
        {
            name: "pão de hambúrguer com cebola caramelizada",
            type: "hamburguer",
            category: "pão",
            calories: 200,
            quantity: 0
        },
        {
            name: "pão de hambúrguer australiano",
            type: "hamburguer",
            category: "pão",
            calories: 160,
            quantity: 0
        }
    ];
    queijos = [
        {
            name: "cheddar",
            type: "hamburguer",
            category: "queijo",
            calories: 120,
            quantity: 0
        },
        {
            name: "muçarela",
            type: "hamburguer",
            category: "queijo",
            calories: 100,
            quantity: 0
        },
        {
            name: "prato",
            type: "hamburguer",
            category: "queijo",
            calories: 110,
            quantity: 0
        },
        {
            name: "gorgonzola",
            type: "hamburguer",
            category: "queijo",
            calories: 140,
            quantity: 0
        },
        {
            name: "provolone",
            type: "hamburguer",
            category: "queijo",
            calories: 130,
            quantity: 0
        }
    ];

    molhos = [
        {
            name: "maionese",
            type: "hamburguer",
            category: "molho",
            calories: 100,
            quantity: 0,
        },
        {
            name: "ketchup",
            type: "hamburguer",
            category: "molho",
            calories: 50,
            quantity: 0,
        },
        {
            name: "mostarda",
            type: "hamburguer",
            category: "molho",
            calories: 30,
            quantity: 0,
        },
        {
            name: "barbecue",
            type: "hamburguer",
            category: "molho",
            calories: 80,
            quantity: 0,
        },
        {
            name: "aioli",
            type: "hamburguer",
            category: "molho",
            calories: 120,
            quantity: 0,
        }
    ];
    complementos = [
        {
            name: "bacon",
            type: "hamburguer",
            category: "complemento",
            calories: 150,
            quantity: 0,
        },
        {
            name: "ovo",
            type: "hamburguer",
            category: "complemento",
            calories: 100,
            quantity: 0,
        },
        {
            name: "cebola caramelizada",
            type: "hamburguer",
            category: "complemento",
            calories: 80,
            quantity: 0,
        },
        {
            name: "alface",
            type: "hamburguer",
            category: "complemento",
            calories: 10,
            quantity: 0,
        },
        {
            name: "tomate",
            type: "hamburguer",
            category: "complemento",
            calories: 15,
            quantity: 0,
        },
        {
            name: "picles",
            type: "hamburguer",
            category: "complemento",
            calories: 5,
            quantity: 0,
        },
    ];
    adicionarComplemento(dado: Ingredient) {
        this.complementos.push(dado);
    }

    obterComplementos() : Ingredient[]{
        return this.complementos;
    }
    adicionarVegetais(dado: Ingredient) {
        this.vegetais.push(dado);
    }

    obterVegetais(): Ingredient[] {
        return this.vegetais;
    }

    adicionarPaes(dado: Ingredient) {
        this.paes.push(dado);
    }

    obterPaes() : Ingredient[] {
        return this.paes;
    }

    adicionarProteinas(dado: Ingredient) {
        this.proteinas.push(dado);
    }

    obterProteinas(): Ingredient[] {
        return this.proteinas as Ingredient[];
    }
    obterQueijos(): Ingredient[] {
        return this.queijos as Ingredient[];
    }
    adicionarMolhos(dado: Ingredient) {
        this.molhos.push(dado);
    }

    obterMolhos() : Ingredient[]{
        return this.molhos ;
    }
}
