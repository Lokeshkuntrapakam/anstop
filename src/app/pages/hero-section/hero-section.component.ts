import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
   ringOuter = [
    'assets/footer/awards/ecslight.webp',
    'assets/footer/awards/footer_clutch3.webp',
    'assets/footer/awards/lambda.webp',
    'assets/footer/awards/smb white.webp',
    'assets/footer/awards/smb white.webp',
  ];

  ringInner = [
    'assets/footer/awards/AWS-Partner.webp',
    'assets/footer/awards/cloudfront.webp',
    'assets/footer/awards/ECS.webp',
    'assets/footer/awards/iso9001.webp',
  ];
}
