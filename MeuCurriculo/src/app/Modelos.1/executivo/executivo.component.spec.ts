import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivoComponent } from './executivo.component';

describe('ExecutivoComponent', () => {
  let component: ExecutivoComponent;
  let fixture: ComponentFixture<ExecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
