/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EssenceNg2PrintComponent } from './essence-ng2-print.component';

describe('EssenceNg2PrintComponent', () => {
  let component: EssenceNg2PrintComponent;
  let fixture: ComponentFixture<EssenceNg2PrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssenceNg2PrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenceNg2PrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
