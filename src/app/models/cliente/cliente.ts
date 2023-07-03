import 'firebase/auth';
import { Favoritos } from '../favoritos/favoritos';

export class Cliente {
    nome: string;
    senha: string;
    email: string;
    favoritos: Favoritos;

    constructor(nome: string, senha: string, email: string) {
        this.senha = senha;
        this.email = email;
        this.nome = nome;
    }

    atualizarNome(nome: string) {
        this.nome = nome;
    }

    atualizarSenha(senha: string) {
        this.senha = senha;
    }

    atualizarEmail(email: string) {
        this.email = email;
    }
}
