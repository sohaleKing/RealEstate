import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidsComponent } from './guids.component';

describe('GuidsComponent', () => {
  let component: GuidsComponent;
  let fixture: ComponentFixture<GuidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
