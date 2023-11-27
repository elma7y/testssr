import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posts } from '../../../interfaces/posts';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-posting-gallery-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PaginatorModule,
    SpinnerComponent,
    CardModule,
  ],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryPostingViewComponent {
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
