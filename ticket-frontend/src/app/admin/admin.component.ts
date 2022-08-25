import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  count: string ="";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserCount()
  }

  // public forAdmin(){
  //   this.userService.forAdmin().subscribe(

  //     (response)=> {
  //       this.message = response
  //     },
  //     (error)=>{
  //       console.log(error)

  //     }
  //   )
  // }

  public getUserCount(){
    this.userService.getUserCount().subscribe(
      (response)=> {
        
      this.count = response
    },
    (error)=>{
      console.log(error)

    })
  }
  

}
