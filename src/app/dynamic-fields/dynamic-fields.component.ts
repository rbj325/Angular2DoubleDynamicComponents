import { Component, OnInit, Input } from '@angular/core';
import { DynamicTextFieldComponent } from '../shared/dynamic-text-field/dynamic-text-field.component';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: 'dynamic-fields.component.html',
  styleUrls: ['dynamic-fields.component.css']
})
export class DynamicFieldsComponent implements OnInit {
  @Input() fields;
  @Input() formGroup;

  constructor() { }

  ngOnInit() {
        this.fields = [{ type: DynamicTextFieldComponent, name: 'text1', id: 'text1' },
      { type: DynamicTextFieldComponent, name: 'text2', id: 'text2' }];
  }

}
