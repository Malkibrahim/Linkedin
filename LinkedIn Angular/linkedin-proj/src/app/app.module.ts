import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { UserInfoComponent } from "./features/profile/user-info/user-info.component";
import { from } from "rxjs";
import { SectionComponent } from './shared/section/section.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, UserInfoComponent, SectionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
