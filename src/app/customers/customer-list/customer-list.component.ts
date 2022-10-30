import { Customer } from './../customer.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as customerActions from "../state/customer.actions";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.store.subscribe(state => {
      console.log(state)
      this.customers = state.customers.customers
    });
  }

}
