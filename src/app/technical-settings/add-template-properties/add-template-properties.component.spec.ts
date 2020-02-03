import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemplatePropertiesComponent } from './add-template-properties.component';

describe('AddTemplatePropertiesComponent', () => {
  let component: AddTemplatePropertiesComponent;
  let fixture: ComponentFixture<AddTemplatePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTemplatePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
