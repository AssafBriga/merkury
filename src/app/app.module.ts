import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule ,MatBadgeModule ,MatChipsModule ,MatSelectModule } from '@angular/material';
import { MainContentComponent } from './main-content/main-content.component';
import { ListManagerComponent } from './main-content/list-manager/list-manager.component';
import { UsersComponent } from './main-content/users/users.component';
import { BaseListComponent } from './main-content/list-manager/base-list/base-list.component';
import { MessageListItemComponent } from './main-content/list-manager/base-list/message-list-item/message-list-item.component';
import { TaskListItemComponent } from './main-content/list-manager/base-list/task-list-item/task-list-item.component';
import { ActivityListItemComponent } from './main-content/list-manager/base-list/activity-list-item/activity-list-item.component';
import { ChartManagerComponent } from './main-content/chart-manager/chart-manager.component';
import { BaseChartComponent } from './main-content/chart-manager/base-chart/base-chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainContentComponent,
    ListManagerComponent,
    UsersComponent,
    BaseListComponent,
    MessageListItemComponent,
    TaskListItemComponent,
    ActivityListItemComponent,
    ChartManagerComponent,
    BaseChartComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatChipsModule,
    MatSelectModule,
    Ng2GoogleChartsModule,
    HttpModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
