import { Component } from '@angular/core';

@Component({
  selector: 'angular-dashboard-calendar',
  templateUrl: './dashboard-calendar.component.html',
  styleUrls: ['./dashboard-calendar.component.css']
})
export class DashboardCalendarComponent {
  currentMonth: any;
  currentDate: any;
  calendarDays: HTMLElement | null = document.querySelector(".calendar-days");
  today: Date = new Date();
  date: Date = new Date();
  days: any = []
  constructor() {
    this.currentMonth = this.date.toLocaleDateString("en-US", { month: 'long', year: 'numeric' });
    console.log(this.today.getDate());
this.currentDate = this.today.getDate();
    this.today.setHours(0, 0, 0, 0);
    this.renderCalendar();
  }

  ngOnInit(): void {
  }


 renderCalendar(): void {
  const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
  const totalMonthDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  const startWeekDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDay();
console.log(prevLastDay, totalMonthDay, startWeekDay);

 // if (!this.calendarDays) return;

 // this.calendarDays.innerHTML = "";

  let totalCalendarDay = 6 * 7;
 // console.log(totalCalendarDay);

  for (let i = 0; i < totalCalendarDay; i++) {
    let day = i - startWeekDay;
  //  console.log(day);

    if (i <= startWeekDay) {


      // adding previous month days
      //this.calendarDays.innerHTML += `${prevLastDay - i}`;
      console.log(prevLastDay - i);
      this.days.push('')
    } else if (i <= startWeekDay + totalMonthDay) {
      // adding this month days
      this.date.setDate(day);
      this.date.setHours(0, 0, 0, 0);

      let dayClass = this.date.getTime() === this.today.getTime() ? 'current-day' : 'month-day';
    //  this.calendarDays.innerHTML += `${day}`;
      console.log(day);

      this.days.push(day);
    } else {
      // adding next month days
    //  this.calendarDays.innerHTML += `${day - totalMonthDay}`;
    }
  }
  }

nextMonth(){
  const monthMap: any = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
  };
//  const currentDate = new Date();
// const currentMonth = currentDate.getMonth();
// console.log(currentMonth);
const currentDate = new Date();
 const currentShownMonth = document.querySelector(".current-month")?.textContent;

 if(currentShownMonth){
 const monthNamea: any = currentShownMonth.trim();
const parts = monthNamea.split(" ");

// The first part should be the month name
const monthName = parts[0];

 const monthNumber = monthMap[monthName];

 const nextMonth = (monthNumber === 11) ? 0 : monthNumber + 1;
 const nextMonthDate = new Date(currentDate.getFullYear(), nextMonth);
 const nextMonthName = nextMonthDate.toLocaleString('default', { month: 'long', year: 'numeric'});
 console.log(nextMonthName);
this.currentMonth = nextMonthName;
 }

 // Get the month number from the mapping object


//  console.log("Month number:", monthNumber);
//  console.log(currentShownMonth);

}
}
