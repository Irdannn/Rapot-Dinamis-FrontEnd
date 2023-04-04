import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponents } from './sidebar.component';

describe('HeaderComponent', () => {
  let component: SidebarComponents;
  let fixture: ComponentFixture<SidebarComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
