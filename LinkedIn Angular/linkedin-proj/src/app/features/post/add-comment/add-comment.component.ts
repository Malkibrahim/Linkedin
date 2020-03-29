import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges
} from "@angular/core";
import { CommunityService } from "../community.service";
import { UserService } from "../../profile/Users.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/_model/user";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"]
})
export class AddCommentComponent implements OnInit, OnChanges {
  // community = [];
  newComment: Comment;
  @Input() comments;
  user: User;
  constructor(
    public communityService: CommunityService,
    public userService: UserService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    //   this.community = this.communityService.getAll();
    // console.log(this.comments[0].userId);
  }
  ngOnChanges() {}
  onAdd(comment) {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.newComment = comment.value;
  }
  getUserName(i: number) {
    // console.log(i);
    this.user = this.userService.getById(i);
    // console.log(this.user);
    return this.user.name;
  }
}
