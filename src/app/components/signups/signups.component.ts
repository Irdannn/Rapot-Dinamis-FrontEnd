import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/helpers/matchvalidator';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router : Router,
    private toast : NgToastService
    ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      namalengkap: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    },
    [CustomValidators.MatchValidator('password', 'password_confirmation')])
  }

  hideShowPass(): void{
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  
  get passwordMatchError() {
    return (
      this.signUpForm.getError('mismatch') &&
      this.signUpForm.get('confirmPassword')?.touched
    );
  }

  onSignUp(){
    if(this.signUpForm.valid) {
      // send the obj to database
      console.log(this.signUpForm.value)
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          this.toast.success({detail: "SUCCESS", summary:res.message, duration: 5000});
          this.signUpForm.reset();
          this.router.navigate(['login'])
        }),
        error:(err=>{
          this.toast.error({detail: "ERROR", summary:"Something went wrong!", duration: 5000});
        })
      })
    } else {
      console.log("form is not valid")
      // throw the error using toaster and with required fields
      ValidateForm.validateAllformsFields(this.signUpForm);
      alert("your form is invalid")
    }
  }
}
