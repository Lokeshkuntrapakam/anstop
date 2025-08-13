import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  teams_data = [
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"our leaders" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Engineers" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Business Team" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Designers" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Marketing" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Talent Acquisition" },
    { name:"Debasish Moharana", designation:"DevOps Lead", social_icon:"assets/about/banner/social/linkedin.webp", profile_img:"assets/about/New folder/Ashwini.webp", category:"Engineers" }
  ];

  categories = ["Engineers", "our leaders", "Business Team", "Designers", "Marketing", "Talent Acquisition"];
  
  selectedCategory = "Engineers";
  filteredTeams:any = [];

  ngOnInit(): void {
    this.filterTeams(this.selectedCategory);
  }

  filterTeams(category: string) {
    this.selectedCategory = category;
    this.filteredTeams = this.teams_data.filter(member => member.category === category);
  }
}