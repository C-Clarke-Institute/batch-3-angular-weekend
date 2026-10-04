import { Component } from '@angular/core';
import { DashboardPage } from '../dashboard-page/dashboard-page';

@Component({
  selector: 'app-scaffold',
  imports: [ DashboardPage ],
  templateUrl: './scaffold.html',
  styleUrl: './scaffold.scss'
})
export class Scaffold {}
