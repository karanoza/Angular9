import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyoneComponent } from './lazyone.component';

describe('LazyoneComponent', () => {
  let component: LazyoneComponent;
  let fixture: ComponentFixture<LazyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
