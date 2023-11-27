import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../interfaces/listing';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    CommonModule,
    GalleryViewComponent,
    ListViewComponent,
    MapViewComponent,
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent {
  listingArray: Listing[];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  subscribtions!: Subscription;

  constructor(
    private listingService: ListingService,
    private messageService: MessageService
  ) {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;
    this.listingArray = [];
  }

  ngOnInit(): void {
    this.getListing();
  }

  getListing() {
    this.subscribtions = this.listingService.getListing().subscribe({
      next: (res: Listing[]) => {
        console.log(res);
        this.listingArray = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Filtered successfully',
    });
  }

  showGallery(): void {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;
  }
  showList(): void {
    this.listView = true;
    this.galleyView = false;
    this.mapView = false;
  }
  showMap(): void {
    this.mapView = true;
    this.galleyView = false;
    this.listView = false;
  }
  ngOnDestroy(): void {
    if (this.subscribtions && this.subscribtions.closed) {
      this.subscribtions.unsubscribe();
    }
  }
}
