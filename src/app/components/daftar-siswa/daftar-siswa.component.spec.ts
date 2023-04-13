import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarSiswaComponent } from './daftar-siswa.component';

describe('DaftarSiswaComponent', () => {
  let component: DaftarSiswaComponent;
  let fixture: ComponentFixture<DaftarSiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarSiswaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarSiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
