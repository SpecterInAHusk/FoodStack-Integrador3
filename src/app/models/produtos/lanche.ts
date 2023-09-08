
export class Lanche {
    id: string;
    tipo: string; //hotdog, hamburguer ou pizza
    nome: string;
    calorias: number;
    autor: string;
    ingredientes: {
        id: string;
        quantidade: number;
    }[];
}