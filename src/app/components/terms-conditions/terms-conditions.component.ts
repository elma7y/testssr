import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss',
})
export class TermsConditionsComponent {
  terms: string[] = [];
  constructor() {}
  ngOnInit(): void {
    this.terms = [
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
      'Lorem ipsum dolor sit amet consectetur. Mattis gravida sed ornare et tincidunt. Purus aliquet a vel enim volutpat at donec nisl. Ut a libero tincidunt massa ultrices id. Nulla ac ac et egestas elementum amet integer cursus dictum. Pretium nulla nullam magna in magna pretium. Risus massa duis neque pulvinar. Id feugiat odio et dictum ultrices eget. Tristique tempus ut maecenas porta elit vitae orci in aliquam. Fermentum arcu elit vitae ut tellus nisi in venenatis. Mi purus sed amet felis. Erat arcu in mauris sit. Eu purus id vel mi faucibus donec in nisl id. Cursus congue viverra sed malesuada sed habitasse amet. Odio gravida felis elit scelerisque ornare ultrices. Iaculis at ac leo vitae non diam leo enim. Sodales mollis dignissim ac vitae in et tellus erat facilisi. Sed risus turpis molestie ullamcorper. ',
    ];
  }
}
