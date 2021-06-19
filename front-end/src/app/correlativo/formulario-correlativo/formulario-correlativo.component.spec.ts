import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorrelativoComponent } from './formulario-correlativo.component';

describe('FormularioCorrelativoComponent', () => {
  let component: FormularioCorrelativoComponent;
  let fixture: ComponentFixture<FormularioCorrelativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCorrelativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCorrelativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
