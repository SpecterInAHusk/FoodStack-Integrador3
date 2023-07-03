import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.page.html',
    styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
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
