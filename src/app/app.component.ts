import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WizardComponent } from './shared/wizard/wizard.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    WizardComponent
  ],
  providers: [FormBuilder]
})
export class AppComponent implements OnInit {
  formSteps: any[];
  form: FormGroup;
  stepComponents: any[] = [
    DynamicFieldsComponent
  ];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({});

    this.formSteps = [];
    for (let i = 0; i !== this.stepComponents.length; i++) {
      let step = { type: this.stepComponents[i], formGroup: this.form };
      this.formSteps.push(step);
    }
  }
}
