import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookMenuComponent } from './notebook-menu.component';

describe('NotebookMenuComponent', () => {
  let component: NotebookMenuComponent;
  let fixture: ComponentFixture<NotebookMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
