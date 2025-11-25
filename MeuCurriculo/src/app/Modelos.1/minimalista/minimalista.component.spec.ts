import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistaComponent } from '../../Modelos/modelomoderno/moderno/modelominimalista/minimalista.component';

describe('MinimalistaComponent', () => {
  let component: MinimalistaComponent;
  let fixture: ComponentFixture<MinimalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinimalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
