import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  imports: [],
  templateUrl: './side-nav-item.html',
  styleUrl: './side-nav-item.scss',
})
export class SideNavItem {

  @Input()
  title: string = 'Dashboard';

  @Output()
  qwe: EventEmitter<any> = new EventEmitter();

  active: boolean = false;


  abc(event: any) {
      // alert("Click Me!");
    this.qwe.emit();
  }

  xyz(event: any) {
    // alert("Double Click Me!");
  }
}
