import { User } from "../../_model/user";

import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Experience } from "./../../_model/experience";
import { ExperienceService } from "./add-section/experince.service";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "Malak Ibarhim",
      jopTitle: "Web Developer",
      location: "Egypt",
      connections: 500,
      imgUrl: "../../assets/images/profile-photo.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    },
    {
      id: 2,
      name: "Mariam Magdy",
      jopTitle: "Front-End Developer",
      location: "New York",

      connections: 600,

      imgUrl: "../../assets/images/profile-photo.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    },

    {
      id: 3,
      name: "Salma Wagdy",
      jopTitle: "Front-End Developer",
      location: "New York",

      connections: 600,
      imgUrl: "../../assets/images/profile-photo.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg"
    }
  ];

  constructor(private experienceService: ExperienceService) {}

  //       productAdded = new EventEmitter<product>();
  searchItem = new EventEmitter<any>();
  getAll(): User[] {
    return this.users.slice();
  }

  getById(id: number): User {
    return this.users.find(a => a.id === id);
  }
  getIndex(name: string): number {
    const index = this.users.findIndex(a => a.name == name);
    return index;
    // this.users.find(a => a.name === name);
  }
  getIdByName(name: string) {
    const user = this.users.find(a => a.name == name);
    return user.id;
    // this.users.find(a => a.name === name);
  }
  getUserFullDataById(id) {
    this.getById(id);
    this.experienceService.getExperienceByUserId(id);
    var fullData = {
      user: this.getById(id),
      userExp: this.experienceService.getExperienceByUserId(id)
    };
    console.log(fullData);
    return fullData;
  }
}
