import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }


showAlert(msg:string){
  alert(msg);
}
}
