import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { Posts } from '../../../interfaces/posts';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    PaginatorModule,
    RouterModule,
    SpinnerComponent,
  ],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MapViewComponent {
  @Input() postingArray!: Posts[];
  currentPage: number;
  pageSize: number;
  expandedStates: boolean[];

  constructor() {
    this.currentPage = 1;
    this.pageSize = 20;
    this.expandedStates = [];
  }
  toggleFullContent(index: number) {
    this.expandedStates[index] = !this.expandedStates[index];
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
}
