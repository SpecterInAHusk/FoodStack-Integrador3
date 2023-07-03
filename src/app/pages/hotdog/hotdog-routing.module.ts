import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotdogPage } from './hotdog.page';

const routes: Routes = [
    {
        path: '',
        component: HotdogPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HotdogPageRoutingModule { }
