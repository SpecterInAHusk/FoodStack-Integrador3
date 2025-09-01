import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaPageRoutingModule } from './pizza-routing.module';

import { PizzaPage } from './pizza.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PizzaPageRoutingModule
    ],
    declarations: [PizzaPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PizzaPageModule { }
