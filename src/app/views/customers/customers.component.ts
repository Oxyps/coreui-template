import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { RequestQuery } from '../../services/abstract.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
  query: RequestQuery = {
    q: '',
    size: '20',
    selects: [
      'customers.person_id',
      'persons.ref',
      'persons.name',
      'persons.fantasy_name',
      'persons.cnpj',
      'addresses.address',
      'addresses.number',
      'addresses.neighborhood',
    ],
    relations: 'contacts',
  };

  customers = [] as Customer[];

  constructor(
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  async loadCustomers(): Promise<void> {
    await this.customerService.findAll(this.query).toPromise()
      .then(response => {
        this.customers = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
    ;
  }
}
