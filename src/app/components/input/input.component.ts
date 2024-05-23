import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, ElementRef, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class InputComponent implements OnInit, OnChanges {
  @Input() pattern: string | "" = "";
  @Input() label: string = '';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() submitted: boolean = false;
  @Input() id: string = uuidv4();

  form: FormGroup;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>()

  constructor(private elementRef: ElementRef) {
    this.form = new FormGroup({
      inputValue: new FormControl(
        { value: '', disabled: this.isDisabled },
        this.getValidators()
      )
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isDisabled'] || changes['pattern'] || changes['required'] || changes['type']) {
      this.updateFormControl();
    }
  }

  private initializeForm() {
    this.form = new FormGroup({
      inputValue: new FormControl(
        { value: '', disabled: this.isDisabled },
        this.getValidators()
      )
    });

    this.form.get('inputValue')?.valueChanges.subscribe(value => {
      if (this.form.get('inputValue')?.valid) {
        console.log('Value emitted from InputComponent:', value);
        this.valueChange.emit(value);
      }
    })

  }

  private updateFormControl() {
    const control = this.form.get('inputValue');
    if (control) {
      if (this.isDisabled) {
        control.disable();
      } else {
        control.enable();
      }
      control.setValidators(this.getValidators());
      control.updateValueAndValidity();
    }
  }

  private getValidators(): ValidatorFn[] {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.type === 'email' || this.type === 'phone') {
      validators.push(this.emailOrPhoneValidator());
    }
    if (this.type === 'password') {
      validators.push(this.passwordValidator());
    }
    if (this.type === 'date') {
      validators.push(this.dateValidator());
    }
    if (this.type === 'text' && this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    return validators;
  }

  emailOrPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null; // Don't validate empty values to allow required validator to handle it
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const phonePattern = /^[0-9]{10,15}$/;

      const isEmailValid = emailPattern.test(value);
      const isPhoneValid = phonePattern.test(value);

      if (!isEmailValid && !isPhoneValid) {
        return { emailOrPhone: true };
      }

      return null;
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      const isValid = value.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
      return !isValid ? { password: true } : null;
    };
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      const isValid = datePattern.test(value) && !isNaN(Date.parse(value));
      return !isValid ? { date: true } : null;
    };
  }

  get inputValue() {
    return this.form.get('inputValue');
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.updateFormControl();
  }

  focusInput() {
    const inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('input');
    inputElement.focus();
  }
}

export type InputType = 'text' | 'password' | 'email' | 'number' | 'date' | 'time' | 'phone' | 'textarea';
