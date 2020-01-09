import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDetailsService {
  // path
  urlPrincipal = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }

  // get list customer
  getcustomers(): Observable<any> {
    return this.httpClient.get(
      this.urlPrincipal + `customer`
    );
  }
  // update customer
  upDateCustomer(id: number, firstName: string, lastName: string, email: string, cc: number ,dob: Date, country:number, city:number): Observable<any> {
    console.log(id, firstName, lastName, email);

    let jsonCustomer = { firstname: firstName, lastname: lastName, email: email,cc:cc,dob:dob,country:country,city:city };
    return this.httpClient.put(
      this.urlPrincipal + 'customer/' + id, jsonCustomer);
  }
  // delete customer
  deleteCustomer(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.delete(
      this.urlPrincipal + 'customer/' + id);
  }


}
