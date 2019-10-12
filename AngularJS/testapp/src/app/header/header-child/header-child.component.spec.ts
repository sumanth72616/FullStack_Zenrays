import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChildComponent } from './header-child.component';

describe('HeaderChildComponent', () => {
  let component: HeaderChildComponent;
  let fixture: ComponentFixture<HeaderChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
