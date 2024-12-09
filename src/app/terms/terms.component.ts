import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '../core/pages';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  private router = inject(Router)

  pages = Pages

  goToHome() {
    this.router.navigateByUrl('/' + this.pages.home);
  }
}
