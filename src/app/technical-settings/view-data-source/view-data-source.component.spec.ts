import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataSourceComponent } from './view-data-source.component';

describe('ViewDataSourceComponent', () => {
  let component: ViewDataSourceComponent;
  let fixture: ComponentFixture<ViewDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
