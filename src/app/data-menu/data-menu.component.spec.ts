import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMenuComponent } from './data-menu.component';

describe('DataMenuComponent', () => {
  let component: DataMenuComponent;
  let fixture: ComponentFixture<DataMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
