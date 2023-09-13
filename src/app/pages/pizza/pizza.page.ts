import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { FavoriteService } from 'src/app/services/favoritos.service';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.page.html',
    styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
    constructor(private FavoriteService: FavoriteService) { }
    @ViewChild('myMenu') menu: any;

    @ViewChild('mySlider') slider: IonSlides;

    @ViewChild('slides', { static: true }) slides: IonSlides;

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    prevSlide() {
        this.slides.slidePrev();
    }
    nextSlide() {
        this.slides.slideNext();
    }
    ngOnInit() {
    }

}
