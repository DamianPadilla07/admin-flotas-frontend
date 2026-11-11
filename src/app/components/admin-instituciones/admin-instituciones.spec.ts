import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminInstitucionesComponent } from './admin-instituciones';

describe('AdminInstitucionesComponent', () => {
  let component: AdminInstitucionesComponent;
  let fixture: ComponentFixture<AdminInstitucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInstitucionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});