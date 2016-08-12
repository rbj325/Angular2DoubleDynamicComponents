import { Component, OnInit } from '@angular/core';
import { DynamicTextFieldComponent } from '../shared/dynamic-text-field/dynamic-text-field.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formGroup;
  fields: Observable<any[]>;
  constructor() { }

  ngOnInit() {

  }

}
