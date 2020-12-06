import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserCreateComponent} from './user-create/user-create.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'user', component: UserComponent},
  {path: 'user.create', component: UserCreateComponent},
  {path: 'user/:id', component: UserDetailComponent},
  {path: '**', redirectTo: 'user.create', pathMatch: 'full' },



  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
