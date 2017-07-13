import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkFacebookComponent } from './social-link-facebook.component';

describe('SocialLinkFacebookComponent', () => {
  let component: SocialLinkFacebookComponent;
  let fixture: ComponentFixture<SocialLinkFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinkFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
