import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page15Page } from './page15.page';

describe('Page15Page', () => {
  let component: Page15Page;
  let fixture: ComponentFixture<Page15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
