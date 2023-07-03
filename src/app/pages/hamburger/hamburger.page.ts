import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { Hamburguer } from 'src/app/models/produtos/hamburger';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
    selector: 'app-hamburger',
    templateUrl: './hamburger.page.html',
    styleUrls: ['./hamburger.page.scss'],
})

export class HamburgerPage {
    constructor(private favoritosService: FavoritosService) { }
    @ViewChild('myMenu') menu: any;

    @ViewChild('mySlider') slider: IonSlides;

    @ViewChild('slides', { static: true }) slides: IonSlides;

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    hamburgueres = this.favoritosService.obterHamburguer();
    prevSlide() {
        this.slides.slidePrev();
    }
    nextSlide() {
        this.slides.slideNext();
    }
    ngOnInit() {
    }

}
