import { Component, Input, OnInit,OnChanges, EventEmitter,Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-ego-chart-one',
  templateUrl: './ego-chart-one.component.html',
  styleUrls: ['./ego-chart-one.component.css']
})
export class EgoChartOneComponent implements OnInit, OnChanges {
  @Input() title = ""
  @Input() enableSlider= true
  @Input() enableDropDown = false
  @Input() enableDropDown2 = false
  @Input() enableDropDown3 = false
  @Input() xAxisLabel = []
  @Input() seriesData = []
  @Input() initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300
  };
  @Input() chartType="0"

  @Output() range = new EventEmitter()
  @Output() astroid = new EventEmitter()
  @Output() parameterSelected = new EventEmitter()
  @Output() astroid2 = new EventEmitter()
  
  @Input() efficiencyType="cost"
  parameter="BIT_DEPTH"
  @Input() astroidId="2"
  astroidId2="2"

  @Input() value = 0.5;
  options: Options = {
    floor: 0,
    ceil: 1,
    step: 0.1,
  };

  chartOptions = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: []
  };
  

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    
    this.chartOptions.xAxis[0].data= this.xAxisLabel
    this.chartOptions.series=this.seriesData
  }

  changeGraph(e){
   
   
    switch(e){
      case '0':
        this.chartOptions.series[0].type= 'bar'
      case '1':
        this.chartOptions.series[0].type= 'line'
      case '2':
        this.chartOptions.series[0].type= 'pie'
    }
    this.ngOnChanges()
    console.log(this.chartOptions.series[0])

  }

  changeAstroid(e){
    console.log(e)
    this.astroid.emit({e: e,kind:this.efficiencyType})
  }

  changeAstroidKind(e){
    console.log(e)
    this.astroid.emit({e: this.astroidId,kind:e})
  }

  changeAstroid2(e){
    this.astroid2.emit({id: e,param:this.parameter})
  }

  changeAstroidParamter(e){
    this.astroid2.emit({id: this.astroidId2,param:e})
  }

  sendRange(e){
    console.log('range '+e)
    this.range.emit(e)

  }

}
