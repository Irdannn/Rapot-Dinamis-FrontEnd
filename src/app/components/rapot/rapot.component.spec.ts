import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapotComponent } from './rapot.component';

describe('RapotComponent', () => {
  let component: RapotComponent;
  let fixture: ComponentFixture<RapotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
