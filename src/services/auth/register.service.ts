import { Injectable } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  async register(email:string, password:string){
    console.log(email, password)
    let auth = getAuth();
    
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user;
        console.log(user)
        return user
      })
      .catch((error: FirebaseError) => {
        console.error(error)
        return error;
      });
  }
}
