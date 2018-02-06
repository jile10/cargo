import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcontactComponent } from './componentcontact.component';

describe('ComponentcontactComponent', () => {
  let component: ComponentcontactComponent;
  let fixture: ComponentFixture<ComponentcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
