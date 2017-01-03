/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ad160x600Component } from './ad160x600.component';

describe('Ad160x600Component', () => {
  let component: Ad160x600Component;
  let fixture: ComponentFixture<Ad160x600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad160x600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad160x600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
