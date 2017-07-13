import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersLinksComponent } from './other-users-links.component';

describe('OtherUsersLinksComponent', () => {
  let component: OtherUsersLinksComponent;
  let fixture: ComponentFixture<OtherUsersLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
