import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: any = {};
  constructor(private _dataService: DataService) { }


  ngOnInit(): void {
    this.loadCertificationDetails();
  }
  loadCertificationDetails() {
    this._dataService.getCertificationDetails().subscribe(data => {
      this.certifications = data;
    })

  }





}
