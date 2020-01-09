import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  // path
  urlPrincipal = '  http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }
  // create customer
  addCustomer(firstName: string, lastName: string, email: string,cc: number , dob:Date,country:number, city:number): Observable<any> {
    console.log(firstName,lastName,email,cc,dob, country, city);
    let jsonCustomer = {firstname: firstName, lastname: lastName, email: email,cc:cc,dob:dob,country:country,city:city };

    return this.httpClient.post(
      this.urlPrincipal + 'customer', jsonCustomer );
  }


}
