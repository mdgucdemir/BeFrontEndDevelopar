import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();

  enteredText = '';

  // -- event.target.value -- \\
  eventTargetValue(value: string) {
    this.enteredText = value;
  }
  getInputValue(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.eventTargetValue(inputValue);
  }
  // -- event.target.value END -- \\

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'currect' : 'incorrect';
  }
}
