import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posts } from '../../../interfaces/posts';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    CardModule,
    SpinnerComponent,
    RouterModule,
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ListViewComponent {
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
