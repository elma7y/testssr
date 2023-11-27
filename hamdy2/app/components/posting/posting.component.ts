import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Posts } from '../../interfaces/posts';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostingService } from '../../services/posting.service';
import { MessageService } from 'primeng/api';
import { GalleryPostingViewComponent } from './gallery-view/gallery-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';

@Component({
  selector: 'app-posting',
  standalone: true,
  imports: [
    CommonModule,
    GalleryPostingViewComponent,
    ListViewComponent,
    MapViewComponent,
  ],
  templateUrl: './posting.component.html',
  styleUrl: './posting.component.scss',
})
export class PostingComponent {
  postingArray: Posts[];
  galleyView: boolean;
  listView: boolean;
  mapView: boolean;
  subscribtions!: Subscription;
  constructor(
    private postingService: PostingService,
    private messageService: MessageService
  ) {
    this.galleyView = true;
    this.listView = false;
    this.mapView = false;
    this.postingArray = [];
  }
  ngOnInit(): void {
    this.getPosting();
  }

  getPosting() {
    this.subscribtions = this.postingService.getPosting().subscribe({
      next: (res: { data: Posts[] }) => {
        console.log('❤️❤️❤️', res);
        res.data.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        this.postingArray = res.data;
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
