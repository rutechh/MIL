import { DashbordComponent } from './dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComsComponent } from './coms/coms.component';
import { FmmsComponent } from './fmms/fmms.component';
import { MshComponent } from './msh/msh.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "msh"
  },
  {
    path: "msh",
    component: MshComponent
  },
  {
    path: "fmms",
    component: FmmsComponent
  },
  {
    path: "coms",
    component: ComsComponent
  },
  {
    path:"dashboard",
    component: DashbordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
