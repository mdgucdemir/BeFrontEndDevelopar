import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = '';
  money: number = 0;
  heigth: number = 0;
  miles: number = 0;

  eventTargetValueName(value: string) {
    this.name = value;
  }
  eventTargetValueDate(date: any) {
    this.date = date;
  }
  eventTargetValueMoney(money: string) {
    this.money = parseFloat(money);
  }
  eventTargetValueHeigth(heigth: string) {
    this.heigth = parseFloat(heigth);
  }
  eventTargetValueMiles(value: string) {
    this.miles = parseFloat(value);
  }

  // ------------------------------------ \\

  onNameChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValueName(inputValue);
  }
  onDateChange(event: Event) {
    const dateValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValueDate(dateValue);
  }
  onMoneyChange(event: Event) {
    const moneyValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValueMoney(moneyValue);
  }
  onHeightChange(event: Event) {
    const heightValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValueHeigth(heightValue);
  }
  onMilesChange(event: Event) {
    const milesValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValueMiles(milesValue);
  }
}
