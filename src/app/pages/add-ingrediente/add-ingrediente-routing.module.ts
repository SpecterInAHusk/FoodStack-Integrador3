import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIngredientePage } from './add-ingrediente.page';

const routes: Routes = [
  {
    path: '',
    component: AddIngredientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIngredientePageRoutingModule {}
