import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatRoomHeadComponent } from './chat-room-head/chat-room-head.component';
import { ChatInputBoxComponent } from './chat-input-box/chat-input-box.component';
import { CurrentUserBubbleComponent } from './current-user-bubble/current-user-bubble.component';
import { CurrentUserLinkComponent } from './current-user-link/current-user-link.component';
import { OtherUsersBubbleComponent } from './other-users-bubble/other-users-bubble.component';
import { OtherUsersLinksComponent } from './other-users-links/other-users-links.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { SidebarLinksComponent } from './sidebar-links/sidebar-links.component';
import { SocialLinkFacebookComponent } from './social-link-facebook/social-link-facebook.component';
import { SocialLinkTwitterComponent } from './social-link-twitter/social-link-twitter.component';
import { SocialLinkYoutubeComponent } from './social-link-youtube/social-link-youtube.component';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


@NgModule({
  declarations: [
    AppComponent,
    ChatRoomHeadComponent,
    ChatInputBoxComponent,
    CurrentUserBubbleComponent,
    CurrentUserLinkComponent,
    OtherUsersBubbleComponent,
    OtherUsersLinksComponent,
    UserMenuComponent,
    SidebarLinksComponent,
    SocialLinkFacebookComponent,
    SocialLinkTwitterComponent,
    SocialLinkYoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
