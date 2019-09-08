import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallspinnerComponent } from './smallspinner.component';

describe('SmallspinnerComponent', () => {
  let component: SmallspinnerComponent;
  let fixture: ComponentFixture<SmallspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
