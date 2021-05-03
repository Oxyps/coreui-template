import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Customer } from '../models/customer.model';
import { GeneralAbstractService } from './general-abstract.service';

const url = `${environment.apiUrl}/customers`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends GeneralAbstractService<Customer>{

  constructor(
    protected http: HttpClient
  ) {
    super(http, url)
  }
}
