import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCajaComponent } from './crear-caja.component';

describe('CrearCajaComponent', () => {
  let component: CrearCajaComponent;
  let fixture: ComponentFixture<CrearCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
