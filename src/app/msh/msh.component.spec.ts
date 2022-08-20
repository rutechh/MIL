/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MshComponent } from './msh.component';

describe('MshComponent', () => {
  let component: MshComponent;
  let fixture: ComponentFixture<MshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
