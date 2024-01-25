import { AbstractControl } from '@angular/forms';

export class EqualityValidators {
  static addition(first: string, second: string, targer: string) {
    return (form: AbstractControl) => {
      const firstNumber = form.value[first];

      const secondNumber = form.value[second];
      const sum = form.value[targer];
      //   const { firstNumber, secondNumber, answer } = form.value;
      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }
}
