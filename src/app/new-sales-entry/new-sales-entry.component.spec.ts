import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalesEntryComponent } from './new-sales-entry.component';

describe('NewSalesEntryComponent', () => {
  let component: NewSalesEntryComponent;
  let fixture: ComponentFixture<NewSalesEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSalesEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
