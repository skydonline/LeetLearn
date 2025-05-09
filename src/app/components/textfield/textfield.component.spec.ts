import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldComponent } from './textfield.component';

describe('TextfieldComponent', () => {
  let component: TextfieldComponent;
  let fixture: ComponentFixture<TextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
