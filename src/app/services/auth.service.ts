import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/cliente/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Criar usuário com email e senha
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Logar com email e senha
  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sair
  signOut() {
    return this.afAuth.signOut();
  }

  // Resetar senha
  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  // Retornar usuário logado
  getCurrentUser() {
    return this.afAuth.authState;
  }
}