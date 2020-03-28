import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { UserService } from "./../../features/profile/Users.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  @ViewChild("search", { static: false })
  searchBox: ElementRef;
  @Output()
  searchItem = new EventEmitter<any>();

  constructor(public userService: UserService) {}

  ngOnInit() {}
  getValue() {
    var data = (this.searchBox.nativeElement as HTMLInputElement).value;
    console.log(data);
    this.userService.getIndex(data);
  }
}
