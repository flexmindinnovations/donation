import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, CalendarModule, DropdownModule, InputNumberModule, InputTextareaModule, InputSwitchModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {

  employeeForm!: FormGroup;
  genderData: GenderItem[] = [];
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.initEmployeeForm();
  }

  ngOnInit(): void {
    this.setDropdownData();
  }

  initEmployeeForm(): void {
    this.employeeForm = this.fb.group({
      EmployeeCode: ['', Validators.required],
      EmployeeName: ['', Validators.required],
      EmployeeSurname: ['', Validators.required],
      EmployeeFatherName: [''],
      Gender: ['', Validators.required],
      Address: [''],
      City: [''],
      PinCode: [''],
      MobilePhone: ['', Validators.pattern(/^\d{10}$/)], // Example: 10-digit phone number
      HomePhone: ['', Validators.pattern(/^\d{10}$/)], // Example: 10-digit phone number
      PersonalEmail: ['', Validators.email],
      IsActive: ['', [Validators.required]],
    });
  }

  setDropdownData() {
    this.genderData = [
      { title: 'Male', value: 'male' },
      { title: 'Female', value: 'female' }
    ];
  }
}

interface GenderItem {
  title: string;
  value: string;
}