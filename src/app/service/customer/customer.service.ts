import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customer:string="/customer";
constructor(private httpClient:HttpClient) { }

getDetails():Observable<any>{
  return this.httpClient.get(environment.baseURL+this.customer)
}

saveDetails(data:any):Observable<any>{
  return this.httpClient.post(environment.baseURL+this.customer,data)
}

updateDetails(data:any,id:number):Observable<any>{
  return this.httpClient.put(environment.baseURL+this.customer+"/"+id,data)
}

deleteDetailsById(id:number):Observable<any>{
  return this.httpClient.delete(environment.baseURL+this.customer+"/"+id)
}

getDetailsById(id:number):Observable<any>{
  return this.httpClient.get(environment.baseURL+this.customer+"/"+id)
}

// https://627d27f2e5ac2c452afe362c.mockapi.io/my-app/customer/id
}
