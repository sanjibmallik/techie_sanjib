import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  skills: any;
  link = "";
  user: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.loadUserDetails()
    // this.loadSkills()
    // this.loadResumeLink();
  }

  loadUserDetails() {
    this._dataService.getUserDetails()
      .subscribe(data => this.user = data)
  }

  loadSkills() {
    this._dataService.getSkillsDetails()
      .subscribe((data: any) => {
        this.skills = data.skills;
      })
  }

  loadResumeLink() {
    this._dataService.getUserDetails()
      .subscribe((data: any) => {
        this.link = data.link;
        this.user = data;

      })
  }

}
