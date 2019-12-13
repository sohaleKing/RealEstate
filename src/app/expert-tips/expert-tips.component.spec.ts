import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTipsComponent } from './expert-tips.component';

describe('ExpertTipsComponent', () => {
  let component: ExpertTipsComponent;
  let fixture: ComponentFixture<ExpertTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
