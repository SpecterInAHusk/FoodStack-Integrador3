import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {
  email:string = "";

  constructor(private router: Router,private userData: UserDataService) { }

  ngOnInit() {
  }
async resetPassword() {
    try {
      await this.userData.resetPassword(this.email);
      // Handle successful password reset, e.g., display a confirmation message
    } catch (error) {
      // Handle password reset error, e.g., display an error message
      console.error(error);
    }
  }
}
