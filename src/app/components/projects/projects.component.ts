import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadProjectDetails()
  }

  loadProjectDetails() {
    this._dataService.getProjectDetails().subscribe(data => {
      this.projects = data;
    })

  }

}
