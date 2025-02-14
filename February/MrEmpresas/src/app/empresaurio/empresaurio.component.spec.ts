import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaurioComponent } from './empresaurio.component';

describe('EmpresaurioComponent', () => {
  let component: EmpresaurioComponent;
  let fixture: ComponentFixture<EmpresaurioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaurioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaurioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
