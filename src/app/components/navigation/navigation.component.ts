import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  links: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getListOfLinks().subscribe(data => {
      this.links = data;
      console.log(data)
    })

  }

  scrollPage(event: any) {
    if (
      location.pathname.replace(/^\//, "") ==
      event.pathname.replace(/^\//, "") &&
      location.hostname == event.hostname
    ) {
      var target = $(event.hash);
      target = target.length
        ? target
        : $("[name=" + event.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      }
    }
    $(".navbar-collapse").collapse("hide");
  }


}
