import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriativoComponent } from './criativo.component';

describe('CriativoComponent', () => {
  let component: CriativoComponent;
  let fixture: ComponentFixture<CriativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
