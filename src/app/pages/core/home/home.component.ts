import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  services:any =[
    {
      name:"Cloud-Native App Development",
      des:"Unlock the Cloud, Cut the Cost!",
      img:"assets/home/services/ap.webp"
    },
    {
      name:"Infrastructure as a Service",
      des:"Modern times. Modern infrastructure.",
      img:"assets/home/services/au.webp"
    },
    {
      name:"Data Science",
      des:"Transform Data into Dollars.",
      img:"assets/home/services/aws.webp"
    },
    {
      name:"AWS Cloud Migration",
      des:"Effortless Transition to AWS Cloud.",
      img:"assets/home/services/chat.webp"
    },
    {
      name:"Cloud Security",
      des:"Secure Your Cloud, Secure Your Success.",
      img:"assets/home/services/ci-cd.webp"
    },
    {
      name:"Cost Optimization",
      des:"Optimize Costs, Boost Your Bottom Line.",
      img:"assets/home/services/cm.webp"
    },
    {
      name:"DevOps as a Service",
      des:"Embrace DevOps, Boost Efficiency.",
      img:"assets/home/services/cn.webp"
    },
    {
      name:"Automation",
      des:"Maximize Time, Minimize Efforts.",
      img:"assets/home/services/co.webp"
    },
    {
      name:"CI/CD",
      des:"Accelerate Your Application Delivery.",
      img:"assets/home/services/cs.webp"
    },
    {
      name:"Application Modernization",
      des:"Upgrade legacy apps for speed and scale.",
      img:"assets/home/services/dev.webp"
    },
    {
      name:"Gen-AI Services",
      des:"AI solutions that think, learn, and adapt.",
      img:"assets/home/services/ds.webp"
    },
    {
      name:"Infrastructure Modernization",
      des:"Faster, smarter, and more efficient cloud.",
      img:"assets/home/services/gen-ai.webp"
    },
    {
      name:"Chatbot Development",
      des:"Smart bots. Real results. 24/7.",
      img:"assets/home/services/ia.webp"
    },
    {
      name:"Pen Testing",
      des:"Find the gaps before hackers do.",
      img:"assets/home/services/if.webp"
    },
    {
      name:"AWS Managed Services",
      des:"Your AWS. Our expertise. Zero hassle",
      img:"assets/home/services/pen.webp"
    },
  ]

  partnership_dat:any=[
    {
      name:"AWS Advanced Tier Services Partner",
      des:"At CloudZenia, we're proud to be an AWS Advanced Tier Services Partner, a distinction that signifies our commitment to delivering exceptional cloud solutions with a strong foundation of expertise and customer success.",
      img:"assets/footer/awards/api gateway sdp white.webp"
    },
    {
      name:"AWS Well-Architected Partner",
      des:"At CloudZenia, as an AWS Well-Architected Partner, we help organizations build resilient architectures, reduce risks, and adapt swiftly to changes. Our expertise ensures high-quality solutions, implements best practices, and continuously optimizes workloads to meet your business and customer needs.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"AWS ECS Delivery Partner",
      des:"At CloudZenia, as an AWS ECS Delivery Partner, we help customers modernize their applications by migrating, optimizing, and managing containerized workloads on Amazon ECS and AWS Fargate. Our expertise ensures seamless integration with AWS services, enabling your business to achieve greater scalability, efficiency, and performance.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"Amazon API Gateway Delivery Partner",
      des:"As an Amazon API Gateway Delivery Partner, CloudZenia specializes in building, deploying, and managing scalable APIs for modern applications. We help businesses expose backend services securely and efficiently, leveraging features like throttling, authorization, and monitoring to ensure seamless API lifecycle management.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"Amazon CloudFront Delivery Partner",
      des:"CloudZenia, as an Amazon CloudFront Delivery Partner, helps you deliver content globally with low latency and high transfer speeds. We optimize caching, edge location strategies, and secure delivery using HTTPS and signed URLs, ensuring exceptional user experiences across devices and geographies.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"Cloud Services for Small and Large Businesses",
      des:"We’re proud to be recognized by AWS for Small and Medium Business Competency. This distinction highlights our proven expertise in helping SMBs accelerate growth, optimize infrastructure, and scale efficiently using the power of the AWS Cloud.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"Amazon RDS Delivery Partner",
      des:"CloudZenia, as an Amazon RDS Delivery Partner, simplifies the management of relational databases in the cloud. We help customers design, migrate, and optimize RDS instances for performance, availability, and cost-efficiency while ensuring data security and compliance.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"AWS Lambda Delivery Partner",
      des:"As an AWS Lambda Delivery Partner, CloudZenia builds scalable serverless applications that reduce operational overhead. We design and deploy event-driven solutions that integrate seamlessly with other AWS services, improving efficiency, reducing costs, and accelerating innovation.",
      img:"assets/footer/awards/AWS-Partner.webp"
    },
    {
      name:"AWS ECS Delivery Partner",
      des:"At CloudZenia, as an AWS ECS Delivery Partner, we help customers modernize their applications by migrating, optimizing, and managing containerized workloads on Amazon ECS and AWS Fargate. Our expertise ensures seamless integration with AWS services, enabling your business to achieve greater scalability, efficiency, and performance.",
      img:"assets/footer/awards/AWS-Partner.webp"
    }, 
  ]

  collaborate_logos:any=[
    {img:"assets/collaborate_logos/aws.webp"},
    {img:"assets/collaborate_logos/azure.webp"}, 
    {img:"assets/collaborate_logos/circleci.webp"}, 
    {img:"assets/collaborate_logos/datadog.webp"}, 
    {img:"assets/collaborate_logos/Dev.webp"}, 
    {img:"assets/collaborate_logos/docker.webp"}, 
    {img:"assets/collaborate_logos/gc.webp"}, 
    {img:"assets/collaborate_logos/github.webp"}, 
    {img:"assets/collaborate_logos/gitlab.webp"}, 
    {img:"assets/collaborate_logos/jaeger-logo.webp"}, 
    {img:"assets/collaborate_logos/jenkins-logo.webp"}, 
    {img:"assets/collaborate_logos/kubernetes.webp"}, 
    {img:"assets/collaborate_logos/ms.webp"}, 
    {img:"assets/collaborate_logos/new_relic.webp"}, 
    {img:"assets/collaborate_logos/postman.webp"}, 
    {img:"assets/collaborate_logos/prometheus.webp"}, 
    {img:"assets/collaborate_logos/Rancher.webp"}, 
    {img:"assets/collaborate_logos/terraform.png"}, 
    {img:"assets/collaborate_logos/Vanta.svg"}, 
  ]

  fer_que: any[] = [
    {
      isOpen: false,
      question:"Where is CloudZenia based, and where do they serve?",
      ans:"CloudZenia is headquartered in Bengaluru, India, and operates globally. We provide Cloud Technology services to clients all around the world, leveraging our expertise to address the unique needs and challenges of businesses across different industries.",
    },
    {
      isOpen: false,
      question:"What is the pricing model for CloudZenia services?",
      ans:"CloudZenia offers flexible, pay-as-you-go pricing for our consulting and implementation services. Whether billed per project or as a retainer for ongoing support, our model ensures you pay only for the expertise and resources you need, optimizing costs and value.",
    },
    {
      isOpen: false,
      question:"What services does CloudZenia offer?",
      ans:"CloudZenia offers the following services: Cloud-Native App Development, AWS Cloud Migration, DevOps as a Service, Data Science, Infrastructure as a Service (IaaS), Automation, Cloud Security, Cost Optimization, and CI/CD.",
    },
    {
      isOpen: false,
      question:"How does CloudZenia ensure data privacy and compliance?",
      ans:"Data privacy and compliance are paramount at CloudZenia. We adhere to industry regulations and implement robust data protection measures. Our services are designed to help businesses meet various compliance requirements, ensuring the security and privacy of sensitive information.",
    },
    {
      isOpen: false,
      question:"Can CloudZenia help my business with IT consulting?",
      ans:"CloudZenia offers strategic Cloud Consulting services to help businesses align their technology initiatives with their overall goals. Our experts provide guidance on technology adoption, digital transformation, and cloud optimization to drive business success. Alongside consulting, we also provide implementation services, ensuring strategies are effectively executed for maximum impact.",
    },
    {
      isOpen: false,
      question:"How does CloudZenia handle data backups and recovery?",
      ans:"CloudZenia assists in configuring automated data backup solutions tailored to your needs. Our experts also set up disaster recovery options, ensuring your data is securely backed up and can be quickly restored in the event of system failures or data loss, safeguarding business continuity.",
    },
    {
      isOpen: false,
      question:"How does CloudZenia address businesses' unique needs?",
      ans:"CloudZenia's solutions are designed to address the distinct requirements and challenges faced by businesses across diverse industries. We customize our services to align with the specific needs of each industry, providing tailored solutions that enhance efficiency, scalability, and overall performance.",
    },
    {
      isOpen: false,
      question:"How can I get started with CloudZenia's services?",
      ans:"Getting started is easy! Reach out to us through our website at www.cloudzenia.com, email us at hello@cloudzenia.com, or call us at +91 8217343025. Our team will assess your needs and craft a customized solution, guiding you every step of the way to unlock the full potential of cloud technology for your business.",
    },
    {
      isOpen: false,
      question:"Can I migrate my existing applications with CloudZenia?",
      ans:"Yes, CloudZenia supports application migration. Our team of experts can assist you in migrating your existing applications seamlessly to the cloud. We provide guidance and support throughout the migration process to minimize downtime and ensure a smooth transition.",
    },
    {
      isOpen: false,
      question:"Does CloudZenia Offer Round-the-Clock Support?",
      ans:"Yes, CloudZenia offers 24/7 technical support. Our support team is ready to assist you with any issues, answer your questions, and provide guidance on optimizing your cloud infrastructure.",
    },
  ]

 toggleFAQ(faq: any) {
    faq.isOpen = !faq.isOpen;
  }
}
