import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtraComponent } from './formtra.component';

describe('FormtraComponent', () => {
  let component: FormtraComponent;
  let fixture: ComponentFixture<FormtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
