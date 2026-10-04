import { Component } from '@angular/core';
import { SideNavItem } from '../side-nav-item/side-nav-item';

@Component({
  selector: 'app-side-nav',
  imports: [ SideNavItem ],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {}
