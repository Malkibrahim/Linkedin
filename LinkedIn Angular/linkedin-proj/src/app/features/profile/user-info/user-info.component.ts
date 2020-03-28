import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../_model/user";
import { UserService } from "../Users.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  @Input()
  user: User[];
  userData: UserService;

  constructor(public userService: UserService) {}

  ngOnInit() {
    if (this.user == null) {
      this.user = this.userService.getAll();
    }
    console.log(this.user);
  }
}
