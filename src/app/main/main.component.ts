import { Component, OnInit, Input } from '@angular/core';
import { EgoServiceService } from '../ego-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allTabs=[1,2]
  xAxisDataOne=[]
  seriesDataOne = [{
    name: 'Counters',
    type: 'bar',
    barWidth: '60%',
    data: []
  }]
  initOptionOne={
    renderer: 'svg',
    width: 1400,
    height: 300
  };

  xAxisDataTwo=['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  seriesDataTwo = [{
    name: 'Counters',
    type: 'line',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
  initOptionTwo={
    renderer: 'svg',
    width: 650,
    height: 300
  };

  seriesDataThree = [{
    name: 'Counters',
    type: 'line',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
  constructor(private egoService:EgoServiceService) {
      
   }

  ngOnInit() {
    let xAxisData1=[]
      let seriesData = []
      this.egoService.getAstroidCostDetails().subscribe(records => {
        for (let i = 1; i <=20 ; i++){
          seriesData.push(records[i.toString()]['total_cost'])
          xAxisData1.push(i.toString())
          // xAxisData1.push(records[i.toString()]['total_time'])
        }
        
        this.seriesDataOne[0].data=seriesData
        console.log(this.seriesDataOne)
        this.xAxisDataOne=xAxisData1

      })
   
  }

  ngOnChanges(){}
    
  

}
