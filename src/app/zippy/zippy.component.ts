import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  isShow = false;
  @Input() title ;
  toggleShow(){
    this.isShow = !this.isShow;
  }

}
