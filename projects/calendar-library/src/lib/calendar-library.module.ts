import { NgModule } from '@angular/core';
import { CalendarLibraryComponent } from './calendar-library.component';
import { DashboardCalendarComponent } from './dashboard-calendar/dashboard-calendar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CalendarLibraryComponent,
    DashboardCalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarLibraryComponent, DashboardCalendarComponent
  ]
})
export class AgniCalendarModule { }
