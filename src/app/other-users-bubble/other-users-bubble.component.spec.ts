import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersBubbleComponent } from './other-users-bubble.component';

describe('OtherUsersBubbleComponent', () => {
  let component: OtherUsersBubbleComponent;
  let fixture: ComponentFixture<OtherUsersBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
