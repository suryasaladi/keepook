import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractPropertiesComponent } from './add-contract-properties.component';

describe('AddContractPropertiesComponent', () => {
  let component: AddContractPropertiesComponent;
  let fixture: ComponentFixture<AddContractPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContractPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
