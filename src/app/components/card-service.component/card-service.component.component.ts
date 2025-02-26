import { Component, Input, input } from '@angular/core';
import { cards } from '../../core/card-data';
import { Card } from '../../core/card-info';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.component.html',
  styleUrl: './card-service.component.component.css'
})
export class CardServiceComponentComponent {

  @Input() card!: Card;
}
