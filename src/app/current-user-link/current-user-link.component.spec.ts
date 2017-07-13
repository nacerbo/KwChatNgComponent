import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserLinkComponent } from './current-user-link.component';

describe('CurrentUserLinkComponent', () => {
  let component: CurrentUserLinkComponent;
  let fixture: ComponentFixture<CurrentUserLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUserLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
