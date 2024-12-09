import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Pages } from '../core/pages';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  pages = Pages
  private router = inject(Router)

  goToPage(page: string){
    this.router.navigate(['/' + page]);
    console.log(`Navigating to ${page}`);
    
  }

}
