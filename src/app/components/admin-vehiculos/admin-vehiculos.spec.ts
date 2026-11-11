import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminVehiculosComponent } from './admin-vehiculos';

describe('AdminVehiculos', () => {
  let component: AdminVehiculosComponent;
  let fixture: ComponentFixture<AdminVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVehiculosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminVehiculosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
