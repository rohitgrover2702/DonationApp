import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationComponentComponent } from './donation-component.component';

describe('DonationComponentComponent', () => {
  let component: DonationComponentComponent;
  let fixture: ComponentFixture<DonationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
