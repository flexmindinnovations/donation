import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
  emailIsValid: boolean = false;
  formGroup!: FormGroup;
  fb = inject(FormBuilder);
  contactPattern = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}|[0-9]{10})$/;
  emailSubmitted: boolean = false;
  passwordSubmitted: boolean = false;

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = this.fb.group({
      emailOrPhone: ['', [Validators.required, Validators.pattern(this.contactPattern)]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    });
  }

  get formGroupControl(): { [key: string]: FormControl } {
    return this.formGroup.controls as { [key: string]: FormControl };
  }

  get contact() {
    return this.formGroup?.get('emailOrPhone');
  }

  onSubmit() {
    if (!this.emailIsValid) {
      this.emailSubmitted = true;
      const emailOrPhoneControl = this.formGroup.get('emailOrPhone');
      if (emailOrPhoneControl) {
        this.emailIsValid = this.contactPattern.test(emailOrPhoneControl.value);
      }
    } else {
      this.passwordSubmitted = true;
      if (this.formGroup.valid) {
        console.log('Form Submitted:', this.formGroup.value);
      }
    }
  }
}
