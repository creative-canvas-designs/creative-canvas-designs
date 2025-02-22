import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Pages } from '../core/pages';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  router = inject(Router)

  library = inject(FaIconLibrary)
  faQuoteLeft = faQuoteLeft
  faQuoteRight = faQuoteRight

  goToContact() {
    this.router.navigateByUrl('/' + Pages.contact);
    console.log('Navigating to contact page');
  }
  
}
