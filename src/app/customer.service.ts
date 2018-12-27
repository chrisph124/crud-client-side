import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from './customer'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  //URL to web api
  private customersURL = 'http://localhost:3000/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersURL)
  }

  getCustomer(id: String): Observable<Customer> {
    const url = `${this.customersURL}/${id}`;
    return this.http.get<Customer>(url)
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post<Customer>(this.customersURL, customer, httpOptions)
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put<Customer>(this.customersURL, customer, httpOptions)
  }

  deleteCustomer(customer: Customer | string):Observable<Customer> {
    const id = typeof customer === 'string' ? customer : customer._id;
    const url = `${this.customersURL}/${id}`;
    return this.http.delete<Customer>(url, httpOptions)
  }
}