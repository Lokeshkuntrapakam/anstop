import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Portfolio', link: '/portfolio' },
    {
      label: 'Services',
      mega: true,
      items: [
        { icon: 'assets/icons/app-modernization.png', title: 'Application Modernization', desc: 'Transform and optimize your legacy applications for the cloud.' },
        { icon: 'assets/icons/ai.png', title: 'Generative AI', desc: 'Enhance automation, creativity, and decision-making with AI-powered solutions.' },
        { icon: 'assets/icons/cost.png', title: 'Cost Optimization', desc: 'Optimize Costs, Boost Your Bottom Line.' },
        { icon: 'assets/icons/aws.png', title: 'AWS Cloud Migration', desc: 'Effortless Transition to AWS Cloud.' },
        { icon: 'assets/icons/cloud-native.png', title: 'Cloud-Native App Development', desc: 'Unlock the Cloud, Cut the Cost!' },
        { icon: 'assets/icons/data.png', title: 'Data Science', desc: 'Transform Data into Dollars.' },
        { icon: 'assets/icons/security.png', title: 'Cloud Security', desc: 'Secure Your Cloud, Secure Your Success.' },
        { icon: 'assets/icons/infrastructure.png', title: 'Infrastructure as a Service', desc: 'Modern times. Modern infrastructure.' },
        { icon: 'assets/icons/devops.png', title: 'DevOps as a Service', desc: 'Embrace DevOps, Boost Efficiency.' },
        { icon: 'assets/icons/automation.png', title: 'Automation', desc: 'Maximize Time, Minimize Efforts.' },
        { icon: 'assets/icons/cicd.png', title: 'CI/CD', desc: 'Accelerate Your Application Delivery.' }
      ]
    },
    { label: 'Industry', mega: true, items: [] },
    { label: 'Programs', mega: true, items: [] },
    { label: 'Resources', mega: true, items: [] },
    { label: 'Pricing', link: '/pricing' }
  ];
}
