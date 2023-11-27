import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    RouterModule,
  ],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarMobileComponent {
  leftSidebarVisible: boolean;
  rightSidebarVisible: boolean;
  constructor() {
    this.leftSidebarVisible = false;
    this.rightSidebarVisible = false;
  }
}
