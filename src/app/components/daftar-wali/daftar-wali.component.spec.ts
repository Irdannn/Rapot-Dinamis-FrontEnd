import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarWaliComponent } from './daftar-wali.component';

describe('DaftarWaliComponent', () => {
  let component: DaftarWaliComponent;
  let fixture: ComponentFixture<DaftarWaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarWaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarWaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
