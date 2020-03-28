import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { UserInfoComponent } from "./features/profile/user-info/user-info.component";
import { from } from "rxjs";
import { SectionComponent } from "./shared/section/section.component";
import { AddSectionComponent } from "./features/profile/add-section/add-section.component";
import { CreatePostComponent } from "./features/post/create-post/create-post.component";
import { AddPostComponent } from "./features/post/add-post/add-post.component";
import { AddCommentComponent } from "./features/post/add-comment/add-comment.component";
import { ErrorPageComponent } from "./layout/error-page/error-page.component";
import { UserService } from "./features/profile/Users.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserInfoComponent,
    SectionComponent,
    AddSectionComponent,
    CreatePostComponent,
    AddPostComponent,
    AddCommentComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: CreatePostComponent },
      { path: "profile", component: UserInfoComponent },
      { path: "**", component: ErrorPageComponent }
    ])
  ],
  // providers: [],
  //   SectionComponent
  // ],
  // imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
