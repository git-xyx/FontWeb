import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharpterOneComponent } from './charpter-one.component';

describe('CharpterOneComponent', () => {
  let component: CharpterOneComponent;
  let fixture: ComponentFixture<CharpterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharpterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharpterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
