import {
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../../interfaces/posts';
import { PostingService } from '../../../services/posting.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, GalleriaModule, CardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent {
  id!: string | null;
  subscribtion!: Subscription;
  isClient: boolean = false;
  details!: Posts;
  images: string[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private postingService: PostingService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostingById();
    if (isPlatformBrowser(this.platformId)) {
      this.isClient = true;
    }
  }
  getPostingById() {
    this.subscribtion = this.postingService.getPostingById(this.id).subscribe({
      next: (res: { data: Posts }) => {
        console.log(res);
        this.details = res.data;
        this.images = res.data.images;
        // this.listingService.details = res;
      },
    });
  }
}
