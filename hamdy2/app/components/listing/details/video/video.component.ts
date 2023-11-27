import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingService } from '../../../../services/listing.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  video: string;
  constructor(public listingService: ListingService) {
    this.video = listingService.details.data.video;
    console.log(this.video);
  }
}
