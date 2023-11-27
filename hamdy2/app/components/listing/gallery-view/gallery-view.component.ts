import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { Listing } from '../../../interfaces/listing';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-gallery-view',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    RouterModule,
    SpinnerComponent,
  ],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryViewComponent {
  currentPage: number;
  pageSize: number;
  expandedStates: boolean[];
  @Input() listingArray!: Listing[];
  constructor() {
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
