import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSidebarComponent } from './access-sidebar.component';

describe('AccessSidebarComponent', () => {
  let component: AccessSidebarComponent;
  let fixture: ComponentFixture<AccessSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
