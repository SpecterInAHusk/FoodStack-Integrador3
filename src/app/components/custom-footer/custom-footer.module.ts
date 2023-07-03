import { NgModule } from "@angular/core";
import { CustomFooterComponent } from "./custom-footer.component";
@NgModule({
    declarations: [
        CustomFooterComponent,
    ],
    exports: [
        CustomFooterComponent,
    ]
})
export class CustomFooterModule { }