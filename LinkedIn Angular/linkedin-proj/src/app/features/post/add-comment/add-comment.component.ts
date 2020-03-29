import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { CommunityService } from "../community.service";
import { UserService } from "../../profile/Users.service";
import { User } from "src/app/_model/user";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"]
})
export class AddCommentComponent implements OnInit, AfterViewInit {
  // community = [];
  @Input() comments;
  user: User;
  constructor(
    public communityService: CommunityService,
    public userService: UserService
  ) {}
  ngOnInit() {
    //   this.community = this.communityService.getAll();
    console.log(this.comments[0].userId);
  }
  ngAfterViewInit() {}
  // Add(comment) {
  //   console.log(comment.value);
  // }
  getUserName(i: number) {
    // console.log(i);
    this.user = this.userService.getById(i);
    // console.log(this.user);
    return this.user.name;
  }
}
