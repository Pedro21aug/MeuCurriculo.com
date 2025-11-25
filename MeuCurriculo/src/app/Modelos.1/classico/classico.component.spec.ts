import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicoComponent } from './classico.component';

describe('ClassicoComponent', () => {
  let component: ClassicoComponent;
  let fixture: ComponentFixture<ClassicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
