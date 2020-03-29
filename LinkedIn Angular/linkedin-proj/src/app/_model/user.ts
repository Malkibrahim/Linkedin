import { Experience } from "./experience";
// import { Community } from "./community";
export interface User {
  id?: number;
  name?: string;
  jopTitle?: string;
  connections?: number;
  location?: string;
  imgUrl?: string;
  imgUrlBG?: string;
  exp?: Experience[];
  // community?: Community[];
}
