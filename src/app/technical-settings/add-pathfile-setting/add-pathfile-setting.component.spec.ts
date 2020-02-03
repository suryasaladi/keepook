import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPathfileSettingComponent } from './add-pathfile-setting.component';

describe('AddPathfileSettingComponent', () => {
  let component: AddPathfileSettingComponent;
  let fixture: ComponentFixture<AddPathfileSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPathfileSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPathfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
