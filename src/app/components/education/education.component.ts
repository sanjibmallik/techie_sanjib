import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  eduDetails: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadEducationDetails()
  }

  loadEducationDetails() {
    this._dataService.getEducationDetails()
      .subscribe(data => this.eduDetails = data)
  }

}
