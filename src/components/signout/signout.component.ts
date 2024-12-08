import { Component } from '@angular/core';
/* Components */
import {MatButtonModule} from '@angular/material/button';
/* Services */
import { SignoutService } from '@s/auth/signout.service';
/* Firebase */
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'sign-out-button',
  imports: [MatButtonModule],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  error = "";
  constructor(private rs: SignoutService){}

  async signout(){
    let c = await this.rs.signout()
    if(c instanceof FirebaseError) this.error = c.code.split('/')[1]
    console.log(c)
  }
}
