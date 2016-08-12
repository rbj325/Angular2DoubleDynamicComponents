import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DclWrapperComponent } from './shared/dcl-wrapper/dcl-wrapper.component';
import { DynamicTextFieldComponent } from './shared/dynamic-text-field/dynamic-text-field.component';
import { WizardComponent } from './shared/wizard/wizard.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    DclWrapperComponent,
    DynamicTextFieldComponent,
    WizardComponent,
    DynamicFieldsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [WizardComponent],
  providers: [],
  entryComponents: [AppComponent, DynamicFieldsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
