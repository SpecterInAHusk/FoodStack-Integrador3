import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotdogPage } from './hotdog.page';

describe('HotdogPage', () => {
    let component: HotdogPage;
    let fixture: ComponentFixture<HotdogPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HotdogPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(HotdogPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
