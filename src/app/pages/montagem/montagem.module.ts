import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontagemPageRoutingModule } from './montagem-routing.module';

import { MontagemPage } from './montagem.page';
import { CustomHeaderModule } from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MontagemPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [
        MontagemPage
    ]
})
export class MontagemPageModule {
    
 }
