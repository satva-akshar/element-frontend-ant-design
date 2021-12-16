import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CommonService, ResultStatus } from '../common.service';
// import { LoginService } from './login.service';
// import { LoginModel } from './LoginModel';
// import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  pwdType = "password";
//   loginObj: LoginModel;
//   Toast: typeof Swal;

  constructor(
    //   private _loginServ: LoginService,
       private fb: FormBuilder, private _router: Router,
    // private _cs: CommonService
  ) {
    this.resetForm();
    // this.loginObj = new LoginModel();
  }

  ngOnInit(): void {
    this.checkAlreadyLoggedIn();
    // this.Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true
    // });
  }
  checkAlreadyLoggedIn() {
    // var JWTToken = this._cs.getLocalStorageItem('JWTtoken');
    // if (JWTToken != null) {
    //   this.afterLoginSuccessRedirection('home')
    // }
  }
  resetForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePassword() {
    this.pwdType == "text" ?
      this.pwdType = "password" : this.pwdType = "text"
  }

  login() {
    // this._cs.markFormGroupTouched(this.loginForm);
    if (this.loginForm.valid) {
    //   this.loginObj = this.loginForm.value;
       
    //   this._loginServ.loginService(this.loginObj).subscribe(res => {
        // if (res.transactionStatus == ResultStatus.Success || res.transactionStatus == 'Success') 
        // {
         
          // LOGIN SUCCESS
          // Set data in local storage here and navigate to modules as per login 
        //   this._cs.setLocalStorageItem('refreshToken', res.data.refreshToken)
        //   this._cs.setLocalStorageItem('JWTtoken', res.data.token)
        //   this._cs.setLocalStorageItem('userInfo', JSON.stringify(res.data.user))
        //   this._cs.setLocalStorageItem('userGroup', res.data.userGroup)
          /// SETS GLOBAL VARIABLES
        //   this._cs.getUserObj();
        //   var t = this._cs.getCookie('XSRF-TOKEN')
         
          // Change value as per requirement
        //   this.afterLoginSuccessRedirection('home')
        // }
        // else 
        // {
        //   this.Toast.fire({
        //     icon: 'error',
        //     title: res.resultMsg
        //   });
        
        // }
    //   });
    }
  }

  afterLoginSuccessRedirection(value) {

    if (value == 'vendor')
      this._router.navigateByUrl("/vendor")
    else
      this._router.navigateByUrl("/elementp2p/home")
  }
  signUp() {
    this._router.navigateByUrl("/register")
  }
}
