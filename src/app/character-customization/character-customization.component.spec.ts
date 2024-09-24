import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCustomizationComponent } from './character-customization.component';

describe('CharacterCustomizationComponent', () => {
  let component: CharacterCustomizationComponent;
  let fixture: ComponentFixture<CharacterCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCustomizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
