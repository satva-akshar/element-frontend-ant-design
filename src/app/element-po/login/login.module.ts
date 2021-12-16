import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent,
    //  RegisterComponent
    ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
//   providers: [LoginService]
})
export class LoginModule { }
