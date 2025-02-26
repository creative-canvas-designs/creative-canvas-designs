import { Component, inject, output } from "@angular/core";
import { Pages } from "../core/pages";
import { Router } from "@angular/router";
import { cards } from "../core/card-data";
import { CardServiceComponentComponent } from "../components/card-service.component/card-service.component.component";
import { Card } from "../core/card-info";
@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [CardServiceComponentComponent],
  templateUrl: "./homepage.component.html",
  styleUrl: "./homepage.component.css",
})
export class HomepageComponent {
  cardsData = output<Card[]>();
  router = inject(Router);

  cards = cards;
 
  goToContact() {
    this.router.navigateByUrl("/" + Pages.contact);
    console.log("Navigating to contact page");
  }
  goToPackages() {
    this.router.navigateByUrl("/" + Pages.packages);
    console.log("Navigating to packages page");
  }
}
