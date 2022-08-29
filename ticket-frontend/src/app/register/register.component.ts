import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      userFirstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      userLastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      userPassword: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      userConfirmPassword: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      
      },
      {
        validators: [Validation.match('userPassword', 'userConfirmPassword')]
      });

  }
  public registerError = (controlName: string, errorName: string) =>{

    
    return this.registerForm.controls[controlName].hasError(errorName);

    }

    get f(): { [key: string]: AbstractControl } {
      return this.registerForm.controls;
    }
  


  register(registerForm: FormGroup){
       
        


    if(registerForm.valid){
      console.log(registerForm.value);
    }


  }
}
