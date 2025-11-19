import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhermodeloComponent } from './escolhermodelo.component';

describe('EscolhermodeloComponent', () => {
  let component: EscolhermodeloComponent;
  let fixture: ComponentFixture<EscolhermodeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhermodeloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolhermodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
