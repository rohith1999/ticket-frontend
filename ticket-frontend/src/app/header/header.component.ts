import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public roles: any;

  constructor(private userAuthService: UserAuthService, 
    private router: Router, 
    public userService: UserService, private dialog: MatDialog) {


   }

  ngOnInit(): void {
     
  }

  public isLoggedIn(){
    this.roles = this.userAuthService.getRoles()
    return this.userAuthService.isLoggedIn()
  }

  public logout(){
    this.userAuthService.clear()
    this.router.navigate(["/"])
  }
  
  public roleMatch(allowedRoles: any): boolean{

    return this.userService.roleMatch(allowedRoles)

  }

  public openUserDetails(): void {
    
    const dialogRef = this.dialog.open(UserDetailsDialog, {
      width: '250px',
      data: this.userAuthService.getUserDetails(),
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  
}

@Component({
  selector: 'user-details-dailog',
  templateUrl: './user.details.dialog.html',
})
export class UserDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {



  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
