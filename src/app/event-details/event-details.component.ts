import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() eventName:string='bd';
  @Input() eventDetails:any;
  @Input() events:any[]=[];
  @Output() sendIndex =new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.eventDetails)
  }


  handleDelete(i:number){
    let deletekey={
      key:i
    }
    console.log(i)
    this.sendIndex.emit(deletekey);
  }
}
