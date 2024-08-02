import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThanksPage } from './thanks.page';
import { ThanksPageRoutingModule } from './thanks-routing.module';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        ThanksPage,
    ],
    imports: [
        CommonModule,
        IonicModule,
        ChartsModule,
        ThanksPageRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ThanksPageModule { }
