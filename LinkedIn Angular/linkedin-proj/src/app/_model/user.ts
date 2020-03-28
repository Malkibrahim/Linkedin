import { Experience } from "./experience";
import { Community } from "./community";
export interface User {
  id?: number;
  name?: string;
  connections?: number;
  imgUrl?: string;
  exp?: Experience[];
  community?: Community[];
}
