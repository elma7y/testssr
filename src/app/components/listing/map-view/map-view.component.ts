import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listing } from '../../../interfaces/listing';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ListingService } from '../../../services/listing.service';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    RouterModule,
    SpinnerComponent,
  ],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MapViewComponent {
  currentPage: number;
  pageSize: number;
  expandedStates: boolean[];
  @Input() listingArray!: Listing[];
  constructor(public listingService: ListingService) {
    this.currentPage = 1;
    this.pageSize = 4;
    this.expandedStates = [];
  }
  startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }
  endIndex(): number {
    return this.startIndex() + this.pageSize;
  }
  paginate(event: any): void {
    this.currentPage = event.page + 1;
  }
  toggleFullContent(index: number) {
    this.expandedStates[index] = !this.expandedStates[index];
  }
}
