import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:User;
  constructor(private activateRoute:ActivatedRoute
              ,private userService : UserServiceService,
              private location : Location) { }

  ngOnInit() {
      this.getUser();
  }
  getUser(){
    const id = + this.activateRoute.snapshot.paramMap.get('email');
    this.userService.getUser(id).subscribe(data=>{
      if(data)
      if(data.status===204)
      {
        console.log('user not found')
      }
      else{
        this.user = data.body;
      }
    })
  }
  backPage() {
    this.location.back();
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe(res=>{
      if(res)
      if(res.status===204)
      {
        console.log('User\'s  details updates');
        this.backPage();
      }
      else{
        console.log('details updated')
      }
    })
  }

}
