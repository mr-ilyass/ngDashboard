import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  bigchart = [] ;
  cards = [] ;
  pie = [];
  ngOnInit(): void {
    // @ts-ignore
    this.bigchart = this.dashboardService.bigChart();
    // @ts-ignore
    this.cards = this.dashboardService.cards();
    // @ts-ignore
    this.pie = this.dashboardService.pie();
  }

}
