import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formtra',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formtra.component.html',
  styleUrls: ['./formtra.component.css']
})
export class FormtraComponent {
  employees: any[] = [];
  name: string = '';
  surname: string = '';
  job: string = '';
  salary: number | null = null;

  c() {}

  addEmployee() {
    const newEmployee = {
      name: this.name,
      surname: this.surname,
      job: this.job,
      salary: this.salary ?? 0
    };
    
    this.employees.push(newEmployee);
    this.name = '';
    this.surname = '';
    this.job = '';
    this.salary = null;
  }
}