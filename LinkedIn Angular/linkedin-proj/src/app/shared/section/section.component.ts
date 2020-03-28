import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../_model/user";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  @Input()
  user: User;
  constructor() {}

  ngOnInit() {
    console.log(this.user);
  }
}
