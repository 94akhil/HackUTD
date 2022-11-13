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
    name: 'Value',
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
    name: 'Value',
    type: 'line',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
  initOptionTwo={
    renderer: 'svg',
    width: 650,
    height: 300
  };

  xAxisDataThree=[]
  seriesDataThree = [{
    name: 'Value',
    type: 'line',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]

  sliderRange=0.5

  graph2aid="2"
  graph2kind="cost"
  economicRecords;

  loadWidOne= false
  loadWidTwo= false
  loadWidThree= false
  loadWidFour=false
  constructor(private egoService:EgoServiceService) {
      
   }

  ngOnInit() {
    // this.fetchParameterTime({id:2,param:'TIMESTAMP'})
    this.loadGraphOne(0.5)
    this.fetchEfficiency({e:2,kind:'cost'})
    
    this.fetchParameters({id:2, param:'BIT_DEPTH'})
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


  ngOnChanges(){
    
  }

  setRange(range){
    
    this.loadGraphOne(range)

  }
    
  fetchEfficiency({e, kind}){
    this.loadWidTwo = false
    
    this.egoService.getAstroidEfficiency(e).subscribe(records => {
      
      let depth = [records[e]['bit_stats']['Buzz Drilldrin'][0],records[e]['bit_stats']['AstroBit'][0],records[e]['bit_stats']['Apollo'][0],records[e]['bit_stats']['ChallengDriller'][0]]
      let cost = [records[e]['bit_stats']['Buzz Drilldrin'][1],records[e]['bit_stats']['AstroBit'][1],records[e]['bit_stats']['Apollo'][1],records[e]['bit_stats']['ChallengDriller'][1]]
      let time = [records[e]['bit_stats']['Buzz Drilldrin'][2],records[e]['bit_stats']['AstroBit'][2],records[e]['bit_stats']['Apollo'][2],records[e]['bit_stats']['ChallengDriller'][2]]

      console.log(depth)
      console.log(cost)
      console.log(time)

      this.seriesDataTwo[0].data=[]
      if (kind == 'cost'){
        for (let i = 0; i <4 ; i++){
          if (depth[i] > 0 && cost[i] > 0 ){
            this.seriesDataTwo[0].data.push(depth[i]/cost[i])
          }
          else{
            this.seriesDataTwo[0].data.push(0)
          }
          
        }
      }
      else{
        for (let i = 0; i <4 ; i++){
          if (depth[i] > 0 && time[i] > 0 ){
            this.seriesDataTwo[0].data.push(depth[i]/time[i])
          }
          else{
            this.seriesDataTwo[0].data.push(0)
          }
          
        }
      }
      console.log(this.seriesDataTwo[0].data)
      this.graph2aid=e
      this.graph2kind=kind
      this.loadWidTwo = true

    })
  }

  fetchParameters({id,param}){
    this.fetchParameterTime({id,param:'TIMESTAMP'})
    this.fetchParameterBehaviour({id,param})
  }

  fetchParameterTime({id,param}){
    this.loadWidFour = false
    this.egoService.getAstroidParameters(id,param).subscribe(records=>{
      this.xAxisDataThree=records[id][param]
      this.loadWidFour = true
    })
  }

  fetchParameterBehaviour({id,param}){
    this.loadWidThree = false
    
    this.egoService.getAstroidParameters(id,param).subscribe(records=>{
      console.log(records[id][param])
      this.seriesDataThree[0].data=records[id][param]
      this.loadWidThree = true
    })
    
  }
  

}
