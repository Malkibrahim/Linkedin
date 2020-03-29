import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { UserService } from "src/app/features/profile/Users.service";
import { User } from "src/app/_model/user";
import { Router } from "@angular/router";
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
  user: User[];
  index: number;
  constructor(private router: Router, public userService: UserService) {}

  ngOnInit() {
    // console.log((this.searchBox.nativeElement as HTMLInputElement).value);
    this.user = this.userService.getAll();
  }
  getValue() {
    var data = (this.searchBox.nativeElement as HTMLInputElement).value;
    console.log(data);
    this.index = this.userService.getIndex(data);
    this.userService.searchItem.next(this.index);
  }
  onHome(user) {
    this.router.navigate(["/home", user[this.index].id]);
  }
}
