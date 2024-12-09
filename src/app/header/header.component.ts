import { Component } from '@angular/core';
import { Pages } from '../core/pages';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'creative-canvas-designs';
  loading: boolean = true;
  loadingOnClick: boolean = true;
  
  page = Pages;

  constructor(private router: Router){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false;
    }, 2000)

    
  }
  goToPage(page: string){
    this.router.navigate(['/' + page]);
    console.log(`Navigating to ${page}`);
    
  }
  onNavClick() {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    }, 1000)
  }

 

  openPackagesPage(){
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
      
    }, 1000)
    this.router.navigate(['/' + Pages.packages]);
  }
}
