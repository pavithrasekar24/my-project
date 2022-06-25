import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../service/data-share/data-share.service';

@Component({
  selector: 'app-approvalStatus',
  templateUrl: './approvalStatus.component.html',
  styleUrls: ['./approvalStatus.component.css']
})
export class ApprovalStatusComponent implements OnInit {
  approvalDetails:any=['Approved','Pending', 'Completed']
  status:string='';
  constructor(private dataShareService:DataShareService) { }

  ngOnInit() {
  }

  handleChange(event:any){
    console.log(event.target.value)
    this.status=event.target.value;
    this.dataShareService.changeApproveStatus(this.status);

  }

}
