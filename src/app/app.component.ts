import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent {
  shouldRender: boolean;
  isServer = true;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.shouldRender = false;
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isServer = false;
      });
    }
  }
  ngDoCheck(): void {
    this.renderCheck();
  }
  renderCheck(): void {
    if (
      this.router.url !== '/contact-us' &&
      this.router.url !== '/login' &&
      this.router.url !== '/reset' &&
      this.router.url !== '/forget' &&
      this.router.url !== '/register'
    ) {
      this.shouldRender = true;
    } else {
      this.shouldRender = false;
    }
  }
}
