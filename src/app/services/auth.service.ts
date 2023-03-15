import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : Auth) { }

  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  loginWhitGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  logout(){
    return signOut(this.auth);
  }


}