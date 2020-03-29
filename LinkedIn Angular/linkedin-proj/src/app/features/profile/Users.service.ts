import { User } from "../../_model/user";

import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
// import { Experience } from "./../../_model/experience";
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
      imgUrlBG: "../../assets/images/Background_Photo.jpg",
      exp: [
        {
          id: 1,
          title: "Trainee",
          location: "Al Asmaili'yah ,Egypt",
          company: {
            id: 1,
            name: "ITI Information Techonology (ITI)",
            compLogo: "../../assets/images/iti.png"
          },

          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "9-months trainee"
        },
        {
          id: 2,
          title: "Manager",
          location: "Al Asmaili'yah ,Egypt",
          company: {
            id: 1,
            name: " Vodafone",
            compLogo: "../../assets/images/suez-canal.png"
          },

          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "pala pla pla"
        }
      ]
    },
    {
      id: 2,
      name: "Mariam Magdy",
      jopTitle: "Front-End Developer",
      location: "New York",

      connections: 600,

      imgUrl: "../../assets/images/profile-photo.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg",

      exp: [
        {
          id: 1,
          title: "Student",
          location: "Al Asmaili'yah ,Egypt",
          company: {
            id: 1,
            name: "ITI Information Techonology (ITI)",
            compLogo: "../../assets/images/suez-canal.png"
          },

          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "pala pla pla"
        }
      ]
    },
    {
      id: 3,
      name: "Salma Wagdy",
      jopTitle: "Front-End Developer",
      location: "New York",

      connections: 600,
      imgUrl: "../../assets/images/profile-photo.jpg",
      imgUrlBG: "../../assets/images/Background_Photo.jpg",

      exp: [
        {
          id: 1,
          title: "Student",
          location: "Al Asmaili'yah ,Egypt",
          company: {
            id: 1,
            name: "ITI Information Techonology (ITI)",
            compLogo: "../../assets/images/suez-canal.png"
          },

          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "pala pla pla"
        }
      ]
    }
  ];
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
  AddExperience(obj, id) {
    this.users[id].exp.push(obj);
    console.log(this.users[id].exp);
  }

  // getPosts(num): any {
  //   var element = this.getById(num);
  //   var arr = element.connection; //[1,2,3]
  //   for (let i; i < arr.length; i++) {
  //     var post = this.getById(arr[i]).community[0].post.post;
  //   }
  //   return post;
  // }

  //   Update (userr:User){
  //       const index = this.users.findIndex(a => a.id === user.id);
  //       this.users[index] = {  id: userr.id,
  //         name: userr.name,
  //         connections: userr.connections,
  //         imgUrl: userr.imgUrl,
  //         exp: [
  //           {
  //             id: userr.exp[index].id,
  //             title: "Student",
  //             location: "Al Asmaili'yah ,Egypt",
  //             company: { id: 1, name: "ITI Information Techonology (ITI)" },
  //             startDate: "Oct 2019",
  //             endDate: "sept 2020",
  //             description: "pala pla pla"
  //           }
  //         ],
  //         community: [
  //           {
  //             id: 1,
  //             post: { id: 1, post: "HI I'M Using LinkedIn :d" },
  //             comment: [{ id: 1, comments: "Welcome broo" }]
  //           }
  //         ]};
  //   }

  //   add (product:product){
  //       const productItem = {id:product.id, data:product.data, price: product.price,
  //           discound:product.discound , imgUrl:product.imgUrl,payments:product.payments,tag:product.tag,category:product.category};
  //       this.products.push(productItem);
  //   }

  //   delete (id: number){
  //       const index = this.products.findIndex(a => a.id === id);
  //       this.products.splice(index, 1);
  //   }
}
