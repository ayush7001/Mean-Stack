import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UsersComponent } from '../users/users.component';

const routes:Routes=[
  {path:'users',component:UsersComponent},
  {path:'getUser/:email',component:UserDetailsComponent},
  {path:'insertUser',component:AddUserComponent},
  {path:'',redirectTo:'users',pathMatch:'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
