/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FmmsComponent } from './fmms.component';

describe('FmmsComponent', () => {
  let component: FmmsComponent;
  let fixture: ComponentFixture<FmmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
