import { Injectable } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SignoutService {

  constructor() { }

  async signout(){
    console.log('signout')
    let auth = getAuth();

    return await signOut(auth)
      .then(() => {
        console.log('Sign-out successful.')
        return true
      })
      .catch((error: FirebaseError) => {
        console.error(error)
        return error;
      });
  }
}
