import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadSkills()
  }

  loadSkills() {
    this._dataService.getSkillsDetails().subscribe(data => this.skills = data)
  }

}
