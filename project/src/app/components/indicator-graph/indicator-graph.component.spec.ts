import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorGraphComponent } from './indicator-graph.component';

describe('IndicatorGraphComponent', () => {
  let component: IndicatorGraphComponent;
  let fixture: ComponentFixture<IndicatorGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
