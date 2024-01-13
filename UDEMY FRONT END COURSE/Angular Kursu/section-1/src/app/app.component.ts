import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length: number = 0;
  inculudeLetters: boolean = false;
  inculudeNumbers: boolean = false;
  inculudeSymbols: boolean = false;

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      debugger;
      this.length = parsedValue;
    }
  }
  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.modifyLength(inputValue);
  }

  modifyLetters() {
    this.inculudeLetters = !this.inculudeLetters;
  }

  modifyNumbers() {
    this.inculudeNumbers = !this.inculudeNumbers;
  }

  modifySymbols() {
    this.inculudeSymbols = !this.inculudeSymbols;
  }

  buttonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const sybols = '!@#$%^&*';

    let validChars = '';

    if (this.inculudeLetters) {
      validChars += letters;
    }
    if (this.inculudeNumbers) {
      validChars += numbers;
    }
    if (this.inculudeSymbols) {
      validChars += sybols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
