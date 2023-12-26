import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {

  title = 'wish_list';
  visible : boolean = false;

  width: number = window.innerWidth;

  ngOnInit() {
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    this.width = window.innerWidth;

  }

}
