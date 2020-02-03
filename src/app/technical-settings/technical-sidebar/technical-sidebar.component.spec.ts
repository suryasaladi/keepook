import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSidebarComponent } from './technical-sidebar.component';

describe('TechnicalSidebarComponent', () => {
  let component: TechnicalSidebarComponent;
  let fixture: ComponentFixture<TechnicalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
