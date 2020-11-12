import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
userProfile:UserProfile={
  name:"j breezy",
  contact:"datyosefguy@gmail.com",
  bio:"this was way way WAY more simple than i was making it out to be"
}

  constructor() { }
  getUserProfile=()=>{
    return this.userProfile
  }
  setUserProfile=(userProfile:UserProfile):void=>{
    this.userProfile = userProfile
  }
}
