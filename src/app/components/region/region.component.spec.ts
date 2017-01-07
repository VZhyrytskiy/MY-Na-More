/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OblastComponent } from './oblast.component';

describe('OblastComponent', () => {
  let component: OblastComponent;
  let fixture: ComponentFixture<OblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
