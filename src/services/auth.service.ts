import { Injectable } from '@angular/core'
import {AngularFireAuth} from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: AngularFireAuth) { 
    auth.authState.subscribe(user => (this.isLogged = user));
  }

  public isLogged: any = false;



  async login(email: string, password: string)
  {
    try{
      return await this.auth.signInWithEmailAndPassword(email, password);
    }
    catch(error)
    {
      console.log("error al ingresar", error);
      return null;
    }
  }


  async register(email: string, password: string)
  {
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password);
    }
    catch(error)
    {
      console.log("error al registrar usuario", error);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string)
  {
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(error)
    {
      console.log("error al ingresar", error);
      return null;
    }
  }

  getUserLogged()
  {
    return this.auth.authState;
  }

  logOut()
  {
    this.auth.signOut();
  }
}
