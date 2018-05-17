import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UserServiceService } from './user-service.service';
import { AdminServiceService } from './admin-service.service';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing/user-routing.module';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { FormsModule}  from '@angular/forms';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    AdminDetailsComponent,
    AddUserComponent,
    AddAdminComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,

  ],
  providers: [UserServiceService,AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
