import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Pages } from './core/pages';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 page = Pages
 
  
}
