import { Component, OnInit } from '@angular/core';
import { BackendConnectService } from './services/backend-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cData;
  totalSummary;
  lastUpdateTime;
  stateDate;
  constructor(private dataService: BackendConnectService) {
    
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.dataService.getCovidData().subscribe(res => {
      this.cData = res;
      this.totalSummary = this.cData.data.summary;
      this.lastUpdateTime = this.formatTime(this.cData.lastRefreshed);
      this.stateDate = this.cData.data.regional;
      console.log("summary", this.totalSummary, this.cData, this.lastUpdateTime);
    });
  }

  formatTime(updateTime) {
    return new Date(updateTime);
  }
}
