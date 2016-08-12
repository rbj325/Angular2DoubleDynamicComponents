import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DclWrapperComponent } from '../dcl-wrapper/dcl-wrapper.component';

@Component({
  selector: 'wizard',
  templateUrl: 'wizard.component.html',
  styleUrls: ['wizard.component.css'],
  directives: [
    forwardRef(() => DclWrapperComponent)
  ]
})
export class WizardComponent implements OnInit {
  @Input() steps;
  @Input() titles;
  @Input() form: FormGroup;

  expandAllSteps = false;
  activeStep: number;
  stepStatus: string[];
  constructor() { }

  ngOnInit() {
  }

}
