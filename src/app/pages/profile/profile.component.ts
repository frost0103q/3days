import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - 3 Days')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Profile - 3 Days',
      },
    ])
  }
}
