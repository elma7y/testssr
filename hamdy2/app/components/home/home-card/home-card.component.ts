import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeCardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() phone!: string;
  @Input() location!: string;
  @Input() paragraph!: string;
  @Input() orderClass!: string;
}
