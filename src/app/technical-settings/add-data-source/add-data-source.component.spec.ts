import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataSourceComponent } from './add-data-source.component';

describe('AddDataSourceComponent', () => {
  let component: AddDataSourceComponent;
  let fixture: ComponentFixture<AddDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
