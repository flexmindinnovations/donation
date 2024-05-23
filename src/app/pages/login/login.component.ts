import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, CommonModule,InputComponent],
})

export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  fb = inject(FormBuilder);
  submitted = false;
  emaiIsValid:boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = this.fb.group({
      emailOrPhone: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  handleValueChange(value: any,src:any) {
    this.formGroup.get(src)?.setValue(value);
  }

  onSubmit() {
    this.submitted = true;
    if(this.formGroup.get('emailOrPhone')?.valid){
      this.emaiIsValid = true
    }
    if (this.formGroup.valid) {
      // Handle valid form submission
      console.log('Form Submitted', this.formGroup.value);
    } else {
      // Handle form errors
      console.log('Form has errors');
    }
  }

  handleRegister() {
    this.router.navigateByUrl('/register');
  }
}
