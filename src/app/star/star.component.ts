import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  isFavourite = false;

  constructor() { }

  ngOnInit() {
  }

  toggleFavourite(){
    console.log('123132');
    this.isFavourite = !this.isFavourite;
  }

}
