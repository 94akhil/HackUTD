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

  xAxisDataTwo=['Buzz Drilldrin', 'AstroBit', 'Apollo', 'ChallengDriller']
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

  sliderRange=0.5

  economicRecords;

  loadWidOne= false
  loadWidTwo= false
  loadWidThree= false
  constructor(private egoService:EgoServiceService) {
      
   }

  ngOnInit() {
    this.loadGraphOne(0.5)
    
  }

  loadGraphOne(range){
    let xAxisData1=[]
    let seriesData = []
    this.loadWidOne = false
    this.egoService.getAstroidCostDetails().subscribe(records => {
      this.economicRecords=records
      for (let i = 1; i <=20 ; i++){
        
        let c=(records[i.toString()]['total_cost'])*range
        let t = (1-range) * (records[i.toString()]['total_time'])
        seriesData.push(Math.round(c+t))
        xAxisData1.push(i.toString())
      }
      
      this.seriesDataOne[0].data=seriesData
    
      this.xAxisDataOne=xAxisData1
      this.loadWidOne = true
      this.sliderRange=range
      console.log('xero ',seriesData)

    })
  }

  loadGraphTwo(){
    let xAxisData=[]
    let seriesData = []
    this.loadWidTwo = false
    this.egoService.getAstroidCostDetails().subscribe(records => {
      for (let i = 1; i <=20 ; i++){
        
        xAxisData.push(i.toString())
      }
      
      this.seriesDataOne[0].data=seriesData
    
      this.xAxisDataTwo=xAxisData
      this.loadWidTwo = true
    


    })
  }

  ngOnChanges(){
    
  }

  setRange(range){
    
    this.loadGraphOne(range)

  }
    
  

}
