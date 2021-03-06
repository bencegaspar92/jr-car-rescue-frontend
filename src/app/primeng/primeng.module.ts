import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {PanelModule} from 'primeng/panel';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [
    ButtonModule,
    RippleModule,
    FieldsetModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    CarouselModule,
    CardModule
  ],
})

export class PrimengModule { }
