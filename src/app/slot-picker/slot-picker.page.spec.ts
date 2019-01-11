import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPickerPage } from './slot-picker.page';

describe('SlotPickerPage', () => {
  let component: SlotPickerPage;
  let fixture: ComponentFixture<SlotPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
