import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiService } from './shared/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from "@angular/material";

import { ChartsModule } from 'ng2-charts';
import { IndicatorGraphComponent } from './components/indicator-graph/indicator-graph.component';
import { StockGridComponent } from './components/stock-grid/stock-grid.component';

import {MatGridListModule, MatGridList} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { PercentPipe } from './shared/pipes/percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndicatorGraphComponent,
    StockGridComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
