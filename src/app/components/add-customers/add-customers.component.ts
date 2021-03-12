import { CustomersService } from './../../services/customers.service';
import { Customers } from './../../models/customers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  Customers: Customers = new Customers();
  submitted = false;

  constructor(private CustomersService: CustomersService) { }

  ngOnInit(): void {
  }

  saveCustomers(): void {
    this.CustomersService.create(this.Customers).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newCustomers(): void {
    this.submitted = false;
    this.Customers = new Customers();
  }

}
