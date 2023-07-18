import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addCharacterComponent } from './add-character.component';

describe('FormComponent', () => {
  let component: addCharacterComponent;
  let fixture: ComponentFixture<addCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [addCharacterComponent]
    });
    fixture = TestBed.createComponent(addCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
