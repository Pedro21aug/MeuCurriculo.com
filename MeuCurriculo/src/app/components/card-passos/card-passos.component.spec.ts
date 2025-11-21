import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassosComponent } from './card-passos.component';

describe('CardPassosComponent', () => {
  let component: CardPassosComponent;
  let fixture: ComponentFixture<CardPassosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPassosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPassosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
