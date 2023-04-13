import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: '../templates/child-one.component.html',
  styleUrls: ['../styles/child-one.component.less']
})
export class ChildOneComponent {

  protected isShow: boolean = false;
  @Input() text: string = "";

  toggleShowText() {
    this.isShow = !this.isShow;
  }
}
