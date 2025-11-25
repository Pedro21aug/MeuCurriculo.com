import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpassosComponent } from './cardpassos.component';

describe('CardpassosComponent', () => {
  let component: CardpassosComponent;
  let fixture: ComponentFixture<CardpassosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpassosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardpassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
