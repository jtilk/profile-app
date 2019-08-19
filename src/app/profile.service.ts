import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { convertActionBinding } from "@angular/compiler/src/compiler_util/expression_converter";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  user: object = {
    name: "tim john dew",
    contact: "call me for a great time",
    bio: "hey, uhh, i'm great"
  };

  constructor(private router: Router) {}

  setUserProfile(
    username: string,
    contact: string,
    bio: string
  ): void | boolean {
    this.user = {
      name: username,
      contact: contact,
      bio: bio
    };
  }

  getUserProfile(): object {
    return { ...this.user };
  }

  editProfile() {
    this.router.navigate(["edit"]);
  }
}

// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// @Injectable({
//  providedIn: "root"
// })
// export class ProfileService {
//  user: object = {
//    name: "mitch",
//    contact: "call me",
//    bio: "i am minnie"
//  };
//  constructor(private router: Router) {}
//  setUserProfile(
//    username: string,
//    contact: string,
//    bio: string
//  :disappointed: void | boolean {
//    this.user = {
//      name: username,
//      contact: contact,
//      bio: bio
//    };
//  }
//  getUserProfile(): object {
//    return { ...this.user };
//  }
//  editProfile() {
//    this.router.navigate(["edit"]);
//  }
// }
