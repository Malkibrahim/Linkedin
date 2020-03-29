// import { User } from "../../_model/user";
import { Community } from "src/app/_model/community";
import { UserService } from "./../profile/Users.service";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class CommunityService {
  private community: Community[] = [
    {
      id: 1,
      post: {
        id: 1,
        post: "HI I'M Using LinkedIn :d",
        userId: 1,
        img:
          "https://media-exp1.licdn.com/dms/image/sync/C4E18AQH9BZAHZOw1Hg/companyUpdate-article-image-shrink_627_1200/0?e=1586995200&v=beta&t=eN67_JhHsEnqLE00PZzKmYP8qxO4nGtaRrSXbOTbS7M",
        comments: [{ id: 1, comment: "Welcome broo", userId: 1 }]
      }
    },
    {
      id: 2,
      post: {
        id: 2,
        post: "HI I'M Using LinkedIn :d",
        userId: 2,
        img: "https://code95.com/wp-content/uploads/BLOGPOST.png",
        comments: [{ id: 2, comment: "Welcome broo", userId: 2 }],
        like: 5
      }
    },
    {
      id: 2,
      post: {
        id: 2,
        post: "HI I'M Using LinkedIn :d",
        userId: 2,
        img:
          "https://www.socialchamp.io/blog/wp-content/uploads/2019/09/schedule-posts-on-linkedin-1.jpg",
        comments: [{ id: 2, comment: "Welcome broo", userId: 1 }],
        like: 10
      }
    }
  ];
  constructor(private userService: UserService) {}

  getAll(): Community[] {
    return this.community.slice();
  }

  getById(id: number): Community {
    return this.community.find(a => a.id === id);
  }
  getUserById(id: number) {
    return this.userService.getById(id);
  }
  getUserName(i: number) {
    console.log(i);
    return i;
  }
}
