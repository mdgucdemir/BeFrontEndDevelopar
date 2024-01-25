import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { EqualityValidators } from '../equality-validators';
import { TitleStrategy } from '@angular/router';
import { delay, filter, scan } from 'rxjs';
@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css'],
})
export class EqualityComponent implements OnInit {
  seconds = 0;
  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(this.generateNummber()),
      secondNumber: new FormControl(this.generateNummber()),
      answer: new FormControl(''),
    },
    [EqualityValidators.addition('firstNumber', 'secondNumber', 'answer')]
  );

  get firstNumber() {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber() {
    return this.mathForm.value.secondNumber;
  }

  constructor() {}

  ngOnInit(): void {
    // const startTime = new Date();
    // let currectAnswer = 0;

    this.mathForm.statusChanges
      .pipe(
        filter((value) => value === 'VALID'),
        delay(800),
        scan(
          (acc: { currectAnswer: number; startTime: Date }) => {
            return {
              currectAnswer: acc.currectAnswer + 1,
              startTime: acc.startTime,
            };
          },
          { currectAnswer: 0, startTime: new Date() }
        )
      )
      .subscribe(({ currectAnswer, startTime }) => {
        // getTime() milisaniye cinsine cevirir
        this.seconds =
          (new Date().getTime() - startTime.getTime()) / currectAnswer / 1000;

        this.mathForm.setValue({
          firstNumber: this.generateNummber(),
          secondNumber: this.generateNummber(),
          answer: '',
        });
      });
  }

  generateNummber() {
    return Math.floor(Math.random() * 10);
  }
}
