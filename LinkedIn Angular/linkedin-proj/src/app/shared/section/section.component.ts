import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../_model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { Experience } from "src/app/_model/experience";
import { ExperienceService } from "./../../features/profile/add-section/experince.service";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  @Input()
  user: User;
  exper: Experience[];
  userId: any = 0;
  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;
    console.log(this.userId);
    this.exper = this.experienceService.getExperienceByUserId(this.userId);
  }
  onEdit(expId) {
    // console.log();
    this.router.navigate(["profile", "edit", this.userId, expId]);
  }
  onAdd() {
    this.router.navigate(["profile", "add", this.userId]);
  }
}
