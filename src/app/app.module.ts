import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbSelectModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EgoChartOneComponent } from './widgets/ego-chart-one/ego-chart-one.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { EgoServiceService } from './ego-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EgoChartOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbThemeModule.forRoot(),
    NbSelectModule,
    NgxSliderModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HttpClientModule
  ],
  providers: [
    EgoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
