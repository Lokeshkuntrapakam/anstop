import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orbiting-circles',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './orbiting-circles.component.html',
  styleUrls: ['./orbiting-circles.component.css']
})
export class OrbitingCirclesComponent {
  /** Array of icon image URLs (svg/png/webp/…) */
  @Input() icons: string[] = [];

  /** Radius in px (distance from center to icons) */
  @Input() radius = 120;

  /** Icon size in px */
  @Input() iconSize = 40;

  /** Rotation speed in seconds */
  @Input() speed = 12;

  /** Reverse the rotation direction */
  @Input() reverse = false;

  /** Pause animation when hovering */
  @Input() pauseOnHover = true;

 

  outerRadius = 140;
middleRadius = 100;
innerRadius = 60;
 
outerIcons = [
  'assets/footer/awards/AWS-Partner.webp',
    'assets/footer/awards/cloudfront.webp',
    'assets/footer/awards/ECS.webp',
    'assets/footer/awards/iso9001.webp',
];

middleIcons = [
  'assets/footer/awards/AWS-Partner.webp',
    'assets/footer/awards/cloudfront.webp',
    'assets/footer/awards/ECS.webp',
    'assets/footer/awards/iso9001.webp',
];

innerIcons = [
  'assets/footer/awards/AWS-Partner.webp',
    'assets/footer/awards/cloudfront.webp',
    'assets/footer/awards/ECS.webp',
    'assets/footer/awards/iso9001.webp',
];

// Calculates equal spacing based on number of icons
angleAt(index: number, total: number) {
  return (360 / total) * index;
}


}
