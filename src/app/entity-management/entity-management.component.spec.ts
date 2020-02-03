import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityManagementComponent } from './entity-management.component';

describe('EntityManagementComponent', () => {
  let component: EntityManagementComponent;
  let fixture: ComponentFixture<EntityManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
