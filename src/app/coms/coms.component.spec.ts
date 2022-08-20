/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComsComponent } from './coms.component';

describe('ComsComponent', () => {
  let component: ComsComponent;
  let fixture: ComponentFixture<ComsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
