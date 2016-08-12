/* tslint:disable:max-line-length */
import { Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  Input,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver } from '@angular/core';
/* tslint:enable:max-line-length */

@Component({
  selector: 'dcl-wrapper',
  templateUrl: 'dcl-wrapper.component.html',
  styleUrls: ['dcl-wrapper.component.css'],
  providers: []
})
export class DclWrapperComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) viewContainerRef;

  @Input() metaData: any;

  cmpRef: ComponentRef<any>;

  private isViewInitialized: boolean = false;

  constructor(private resolver: ComponentFactoryResolver) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    this.cmpRef = this.viewContainerRef.createComponent(this.resolver.resolveComponentFactory(this.metaData.type), 0);
    this.cmpRef.instance.name = this.metaData.name;
    this.cmpRef.instance.id = this.metaData.id;
  }
  ngOnInit() {
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
