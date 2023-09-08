import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIngredientePageRoutingModule } from './add-ingrediente-routing.module';

import { AddIngredientePage } from './add-ingrediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIngredientePageRoutingModule
  ],
  declarations: [AddIngredientePage]
})
export class AddIngredientePageModule {}
