import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { Listing } from '../../../interfaces/listing';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    RouterModule,
    SpinnerComponent,
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
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
