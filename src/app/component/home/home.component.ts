import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  anchorClicked(id){
         const element = document.querySelector ( "#" + id )
         if (element) {
         	element.scrollIntoView();
         }
  }
}
