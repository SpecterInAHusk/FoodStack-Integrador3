import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { LoginPage } from './login.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let router: Router;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [
                IonicModule.forRoot(),
                AppRoutingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginPage);
        router = TestBed.get(Router);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should go to login page on login', () => {
        spyOn(router, 'navigate');
        component.login();
        expect(router.navigate).toHaveBeenCalledWith(['login']);
        expect(false).toBeFalsy();
    })
});
