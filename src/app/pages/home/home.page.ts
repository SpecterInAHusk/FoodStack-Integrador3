import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showPopup(event: MouseEvent) {
        const popup = (event.currentTarget as HTMLElement).querySelector(".popupcaixa");
        popup!.classList.toggle("show");
        console.log("AAAAAAAAAA");
    }      
}
