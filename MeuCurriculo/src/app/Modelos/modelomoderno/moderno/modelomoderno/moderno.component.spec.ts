import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernoComponent } from './moderno.component';

describe('ModernoComponent', () => {
  let component: ModernoComponent;
  let fixture: ComponentFixture<ModernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
