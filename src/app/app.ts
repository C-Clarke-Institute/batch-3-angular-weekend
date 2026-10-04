import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SideNav } from './side-nav/side-nav';
import { Scaffold } from './scaffold/scaffold';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [ Header , SideNav , Scaffold, Footer ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-first-project');
}
