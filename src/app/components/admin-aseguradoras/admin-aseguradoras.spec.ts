import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAseguradorasComponent } from './admin-aseguradoras';

describe('AdminAseguradoras', () => {
  let component: AdminAseguradorasComponent;
  let fixture: ComponentFixture<AdminAseguradorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAseguradorasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAseguradorasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
