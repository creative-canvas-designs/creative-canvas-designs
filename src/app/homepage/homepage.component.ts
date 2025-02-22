import { Component, inject } from '@angular/core';
import { Pages } from '../core/pages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  router = inject(Router)
  goToContact() {
    this.router.navigateByUrl('/' + Pages.contact);
    console.log('Navigating to contact page');
  }
  goToPackages() {
    this.router.navigateByUrl('/' + Pages.packages);
    console.log('Navigating to packages page');
  }
}
