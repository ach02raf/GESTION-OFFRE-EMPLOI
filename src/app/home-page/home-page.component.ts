import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  tabSite = [
    { name: 'structural-home', image: 'assets/images/structural-home.png' },
    { name: 'structural-steel', image: 'assets/images/structural-metal.png' },
    { name: 'structural-wood', image: 'assets/images/structural-wood.png' },
  ];
  constructor(private router: Router) {}
  async ShowClickSite(idsite: string) {
    this.router.navigate(['site', idsite]);
  }
}
