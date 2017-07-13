import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkYoutubeComponent } from './social-link-youtube.component';

describe('SocialLinkYoutubeComponent', () => {
  let component: SocialLinkYoutubeComponent;
  let fixture: ComponentFixture<SocialLinkYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinkYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
