/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { WizardComponent } from './wizard.component';

describe('Component: Wizard', () => {
  it('should create an instance', () => {
    let component = new WizardComponent();
    expect(component).toBeTruthy();
  });
});
