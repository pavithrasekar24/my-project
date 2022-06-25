import { Component, OnInit } from '@angular/core';
import { Event } from 'src/model/Event';
import { CustomerTableComponent } from '../customer-table/customer-table.component';
import { CommonService } from '../service/common/common.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers:[CommonService,CustomerTableComponent]
})
export class AddEventComponent implements OnInit {
  evtName:string='Celebration';

  eventDetails:any={
    eventName:'',
    location:''
  }

  events:Event[]=[{
    eventName:'B day',
    location:'chennai'
  }]


  constructor(private commonService:CommonService,private customerTableComponent: CustomerTableComponent) { }

  ngOnInit() {

  }
  handleAdd(){
    this.events.push({...this.eventDetails})
    this.commonService.showAlert('Event added sucessfully')
    console.log(this.customerTableComponent.customerDetails)
  }


getIndex(details:any){
  console.log(details,details.key);
  this.events.splice(details.key,1);
}

}
