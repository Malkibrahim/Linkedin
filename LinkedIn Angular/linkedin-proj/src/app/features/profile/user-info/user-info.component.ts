import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../_model/user";
import { UserService } from "../Users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Experience } from "./../../../_model/experience";
import { ExperienceService } from "./../add-section/experince.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  @Input()
  user: User[];
  userData: User;
  experData: Experience[];
  //index: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    if (this.user == null) {
      this.user = this.userService.getAll();
    }
    const id = parseInt(this.activatedRoute.snapshot.params["id"]);
    this.userData = this.userService.getById(id);
    this.experData = this.experienceService.getExperienceByUserId(id);
    console.log(this.userData);
    console.log(this.experData);
    console.log(this.user);
    // this.userService.searchItem.subscribe(index => {
    //   this.index = index;
    //   console.log(this.index);
    // });
    this.userService.searchItem.subscribe(id => {
      debugger;
      // this.userData = userF.user;
      // this.experData = userF.userExp;
      // console.log(this.userData);
      this.router.navigate(["home", id]);
      this.router.navigate(["profile", id]);
      this.ngOnInit();
    });
  }
}
