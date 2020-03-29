import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  ControlContainer
} from "@angular/forms";
import { company } from "./../../../_model/Company";
import { CompanyService } from "./company.service";
import { Experience } from "./../../../_model/experience";
import { UserService } from "./../Users.service";

@Component({
  selector: "app-add-section",
  templateUrl: "./add-section.component.html",
  styleUrls: ["./add-section.component.scss"]
})
export class AddSectionComponent implements OnInit {
  user: UserService;
  exp: Experience;
  companies: company[];
  myForm: FormGroup;
  title: FormControl;
  location: FormControl;
  company: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  description: FormControl;

  constructor(
    public companyService: CompanyService,
    public userervice: UserService
  ) {}

  ngOnInit() {
    this.companies = this.companyService.getAll();
    console.log(this.companies);
    this.title = new FormControl();

    this.location = new FormControl();
    this.company = new FormControl({});
    this.startDate = new FormControl();
    this.endDate = new FormControl();
    this.description = new FormControl();
    this.myForm = new FormGroup({
      titleName: this.title,
      locationName: this.location,
      companyName: this.company,
      startDT: this.startDate,
      endDt: this.endDate,
      descriptionText: this.description
    });
  }
  onSubmit() {
    console.log(this.myForm);
    //const exp: Experience = this.myForm.getRawValue();
    var experince: Experience = {
      id: 0,
      title: this.myForm.value.titleName,
      location: this.myForm.value.locationName,
      company: {
        id: 1,
        name: this.myForm.value.companyName,
        compLogo: this.companyService.getLogo(this.myForm.value.companyName)
      },

      startDate: this.myForm.value.startDT,
      endDate: this.myForm.value.endDt,
      description: this.myForm.value.descriptionText
    };
    console.log(experince);
    this.userervice.AddExperience(experince, 0);
  }
}
