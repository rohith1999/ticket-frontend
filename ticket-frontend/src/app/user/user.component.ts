import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string="";
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.forUser()
  }


  public forUser(){
    this.userService.forUser().subscribe(

      (response)=> {
        this.message = response
      },
      (error)=>{
        console.log(error)

      }
    )
  }

}
