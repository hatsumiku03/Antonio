import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  number1 = 0;
  number2 = 0;
  result = 0;

  sumar() {
    this.result = this.number1 + this.number2;
    console.log(this.result);
  }

  restar() {
    this.result = this.number1 - this.number2;
  }
}
