import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/core/home/home.component';
import { AboutUsComponent } from './pages/core/about-us/about-us.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  

 }
