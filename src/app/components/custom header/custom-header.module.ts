import { NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { CustomHeaderComponent } from "./custom-header.component";
@NgModule({
    declarations: [
        CustomHeaderComponent,
    ],
    exports: [
        CustomHeaderComponent,
    ]
})
export class CustomHeaderModule {
    

    

}