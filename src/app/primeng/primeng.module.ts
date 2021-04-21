import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

@NgModule({
  exports: [
    ButtonModule,
    RippleModule,
    FieldsetModule,
    InputTextModule,
    PasswordModule
  ],
})

export class PrimengModule { }
