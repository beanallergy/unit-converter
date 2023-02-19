import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutScreenComponent } from './about-screen/about-screen.component';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
  { path: 'about', component: AboutScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
