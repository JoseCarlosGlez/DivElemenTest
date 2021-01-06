import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineTimeCommitsComponent } from './line-time-commits.component';

describe('LineTimeCommitsComponent', () => {
  let component: LineTimeCommitsComponent;
  let fixture: ComponentFixture<LineTimeCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineTimeCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineTimeCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
