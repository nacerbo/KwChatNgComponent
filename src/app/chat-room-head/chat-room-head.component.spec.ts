import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomHeadComponent } from './chat-room-head.component';

describe('ChatRoomHeadComponent', () => {
  let component: ChatRoomHeadComponent;
  let fixture: ComponentFixture<ChatRoomHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
