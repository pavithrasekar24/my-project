import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  getColor='green';
  constructor() { }

  ngOnInit() {
  }


  myStyle(){
    let style={
     'font-weight':600,
     'color':'red',
    }
    return style;
  }

  applyClasses(){
    let classes={
      boldClass:true,
      italicClass:true
    }
    return classes
  }
}
