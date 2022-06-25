import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../service/data-share/data-share.service';

@Component({
  selector: 'app-get-status',
  templateUrl: './get-status.component.html',
  styleUrls: ['./get-status.component.css']
})
export class GetStatusComponent implements OnInit {

  status:string='';

  constructor(private dataShareService:DataShareService) {
    this.dataShareService.currentApproveStatus.subscribe(item=>{
      console.log(item);
      this.status=item;
    })
  }

  //lifecycle  calls one time; when comp load
  ngOnInit() {
    console.log('oninit')
  }

}
