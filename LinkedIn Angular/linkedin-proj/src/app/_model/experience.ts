import { company } from "./Company";

export interface Experience {
  id?: number;
  title?: string;
  location?: string;
  company?: company;
  startDate?: string;
  endDate?: string;
  description?: string;
}
