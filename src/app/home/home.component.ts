import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { HomeCardComponent } from './home-card/home-card.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    HomeCardComponent,
    TabMenuModule,
    DropdownModule,
    ButtonModule,
    InputNumberModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  card1Title: string = 'Spa Marib';
  card1Image: string = '../../assets/card/Rectangle 104.png';
  card1paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card1Phone: string = '(605) 716-6600';
  card1Location: string = 'Ontario';
  card2Title: string = 'Women Spa ';
  card2Image: string = '../../assets/card/Rectangle 114.png';
  card2paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card2Phone: string = '(605) 726-6600';
  card2Location: string = 'Ontario';
  card3Title: string = 'Cafe de Maribelle';
  card3Image: string = '../../../assets/card/Rectangle 105.png';
  card3paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card3Phone: string = '(605) 726-6600';
  card3Location: string = 'Ontario';
  card3Order: string = 'order-1';
  card4Title: string = 'Cafe de Maribelle';
  card4Image: string = '../../../assets/card/Rectangle 118.png';
  card4paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card4Phone: string = '(605) 726-6600';
  card4Location: string = 'Ontario';
  card4Order: string = 'order-1';
  card5Title: string = 'Salon della ';
  card5Image: string = '../../../assets/card/Rectangle 106.png';
  card5paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card5Phone: string = '(605) 726-6600';
  card5Location: string = 'Ontario';
  card6Title: string = 'Lady Salon';
  card6Image: string = '../../../assets/card/Rectangle 105.png';
  card6paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  card6Phone: string = '(605) 726-6600';
  card6Location: string = 'Ontario';
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    console.log(this.activeItem);
  }
}
