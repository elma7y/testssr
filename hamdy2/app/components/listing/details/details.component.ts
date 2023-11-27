import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api/menuitem';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ListingService } from '../../../services/listing.service';
import { BussinessData } from '../../../interfaces/bussiness-data';
import { Posts } from '../../../interfaces/posts';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { PaginatorModule } from 'primeng/paginator';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    PaginatorModule,
    SpinnerComponent,
    InputTextareaModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent implements OnInit, OnDestroy {
  id!: string | null;
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  details!: BussinessData;
  bussinessSubscribtion!: Subscription;
  postsSubscription!: Subscription;
  postingArray: Posts[];
  showFullContent: boolean;
  currentPage: number;
  pageSize: number;
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) {
    this.showFullContent = false;
    this.currentPage = 1;
    this.pageSize = 4;
    this.postingArray = [];
  }
  ngOnInit(): void {
    this.items = [
      { label: 'Photos', routerLink: 'photos' },
      { label: 'Video', routerLink: 'video' },
    ];
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBusinessesById();
    this.getPostsById();
  }
  getBusinessesById() {
    this.bussinessSubscribtion = this.listingService
      .getBusinessesById(this.id)
      .subscribe({
        next: (res: BussinessData) => {
          console.log(res);
          this.details = res;
          this.listingService.details = res;
        },
      });
  }
  getPostsById() {
    this.postsSubscription = this.listingService
      .getPostsById(this.id)
      .subscribe({
        next: (res: { data: Posts[] }) => {
          this.postingArray = res.data;
        },
      });
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    console.log(this.activeItem);
  }
  toggleFullContent() {
    this.showFullContent = !this.showFullContent;
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
  ngOnDestroy(): void {
    if (this.bussinessSubscribtion && this.bussinessSubscribtion.closed) {
      this.bussinessSubscribtion.unsubscribe();
    }
    if (this.postsSubscription && this.postsSubscription.closed) {
      this.postsSubscription.unsubscribe();
    }
  }
}
