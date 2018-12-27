import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer = new Customer();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  addCustomer(): void {
    this.submitted = true;
    this.customerService.addCustomer(this.customer)
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
