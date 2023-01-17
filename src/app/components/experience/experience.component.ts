import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: any
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getExperienceDetails()
  }

  getExperienceDetails() {
    this._dataService.getExperienceDetails().subscribe(data => this.exp = data)
  }

}
