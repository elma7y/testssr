import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ListingService } from '../../../../services/listing.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-carasoul',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './carasoul.component.html',
  styleUrl: './carasoul.component.scss',
})
export class CarasoulComponent {
  isClient: boolean = false;
  images: any[] | undefined = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(
    public listingService: ListingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.images = listingService.details.data.images;
    console.log(this.images);
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isClient = true;
    }
  }
}
