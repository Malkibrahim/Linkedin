import { Post } from "./posts";
import { Comments } from "./comment";
export interface Community {
  id?: number;
  post?: Post;
  comment?: Comments[];
}
