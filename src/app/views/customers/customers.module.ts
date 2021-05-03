import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CustomersRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),

    CommonModule,
  ],
  declarations: [ CustomersComponent ]
})
export class CustomersModule { }
