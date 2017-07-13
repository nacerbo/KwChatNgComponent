import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkTwitterComponent } from './social-link-twitter.component';

describe('SocialLinkTwitterComponent', () => {
  let component: SocialLinkTwitterComponent;
  let fixture: ComponentFixture<SocialLinkTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinkTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
