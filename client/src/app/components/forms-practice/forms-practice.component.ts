import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.scss'],
})
export class FormsPracticeComponent {
  form = new FormGroup({
    rango: new FormControl('', Validators.required),
    datetime: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    checkbox: new FormControl('', Validators.required),
  });

  constructor() {}

  get rangoControl(): FormControl {
    return this.form.get('rango') as FormControl;
  }
  get datetimeControl(): FormControl {
    return this.form.get('datetime') as FormControl;
  }
  get colorControl(): FormControl {
    return this.form.get('color') as FormControl;
  }
  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get checkboxControl(): FormControl {
    return this.form.get('checkbox') as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    alert('observa la consola!');
  }
}
