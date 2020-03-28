import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { EventEmitter } from "@angular/core";

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

  constructor() {}

  ngOnInit() {
    console.log((this.searchBox.nativeElement as HTMLInputElement).value);
  }
}
