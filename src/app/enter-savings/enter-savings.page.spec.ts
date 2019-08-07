import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSavingsPage } from './enter-savings.page';

describe('EnterSavingsPage', () => {
  let component: EnterSavingsPage;
  let fixture: ComponentFixture<EnterSavingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterSavingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
