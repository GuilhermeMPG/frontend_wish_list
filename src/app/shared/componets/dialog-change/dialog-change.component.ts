import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-change',
  templateUrl: './dialog-change.component.html',
  styleUrls: ['./dialog-change.component.scss']
})
export class DialogChangeComponent implements OnInit {

  @Input() public   display !: boolean;
  @Output() public displayChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
okBnt(){

  this.display = false;
  this.displayChange.emit(this.display);
  console.log(this.display + "onBnt")
}
onON(){
  this.display = true;
}




}
