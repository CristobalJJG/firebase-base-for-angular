import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
/* Components */
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SignoutComponent } from '@c/signout/signout.component';
/* Services */
import { SigninService } from '@s/auth/signin.service';
/* Firebase */
import { FirebaseError } from 'firebase/app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule,
    FormsModule, CommonModule, SignoutComponent],
  
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  error = "";
  btnDisabled = true;

  constructor(private rs: SigninService){}

  async register(form:NgForm){
    let c = await this.rs.signin(form.value.email, form.value.password)
    if(c instanceof FirebaseError) this.error = c.code.split('/')[1]
    console.log(c)
  }

  updateData(form:NgForm){
    let email = form.value.email;
    let password = form.value.password;
    if(
      email.length >= 6 &&
      password.length >= 6
    )this.btnDisabled = false;
    else this.btnDisabled = true;
    
    console.log(email, password, this.btnDisabled)
  }
}
