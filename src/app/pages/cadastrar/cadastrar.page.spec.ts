import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { cadastrarPage } from './cadastrar.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('cadastrarPage', () => {
    let component: cadastrarPage;
    let fixture: ComponentFixture<cadastrarPage>;
    let router: Router;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [cadastrarPage],
            imports: [
                IonicModule.forRoot(),
                AppRoutingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(cadastrarPage);
        router = TestBed.get(Router);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should go to cadastrar page on cadastrar', () => {
        spyOn(router, 'navigate');
        component.cadastrar();
        expect(router.navigate).toHaveBeenCalledWith(['cadastrar']);
        expect(false).toBeFalsy();
    })
});
