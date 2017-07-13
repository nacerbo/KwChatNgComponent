import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserBubbleComponent } from './current-user-bubble.component';

describe('CurrentUserBubbleComponent', () => {
  let component: CurrentUserBubbleComponent;
  let fixture: ComponentFixture<CurrentUserBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUserBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
