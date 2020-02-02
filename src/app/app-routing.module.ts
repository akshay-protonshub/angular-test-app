import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';
import { PopComponent } from './pop/pop.component';

const routes: Routes = [
   { path: '', component:MainComponent},
  //{path:'', component: PopComponent},
  { path: '**', redirectTo:"/" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
