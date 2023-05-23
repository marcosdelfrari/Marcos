import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  items = [
    {
      link: 'https://github.com/marcosdelfrari',
      image: 'assets/imgs/git.png',
      description: 'GITHUB'
    },
    {
      link: 'https://www.linkedin.com/in/marcosdelfrari/',
      image: 'assets/imgs/in.png',
      description: 'LINKEDIN'
    },
    {
      link: 'https://wa.me/5531994369932',
      image: 'assets/imgs/wpp.png',
      description: 'WHATSAPP'
    }
  ];
}
