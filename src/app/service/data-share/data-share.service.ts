import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  //Subject - can't set default / BehaviorSubject can set default value;
  //Store data
private approveStatus= new BehaviorSubject<string>('Started');
currentApproveStatus = this.approveStatus.asObservable();
//get latest value return.

constructor() { }


//.next() for change behaviour subject obj value;

//.subscribe() for  get latest value;

changeApproveStatus(appr:string){
  this.approveStatus.next(appr);

  console.log(this.currentApproveStatus);
}

}
