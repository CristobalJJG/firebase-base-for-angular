import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* Components */
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
/* Services */
import { RegisterService } from '@auth/register.service';
/* Firebase */
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-register',
  imports: [
    MatButtonModule, MatFormFieldModule, MatInputModule,
    FormsModule, CommonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  error = "";
  btnDisabled = true;

  constructor(private rs: RegisterService){}

  async register(form:NgForm){
    let c = await this.rs.register(form.value.email, form.value.password)
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
