import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room-head',
  templateUrl: './chat-room-head.component.html',
  styleUrls: ['./chat-room-head.component.sass']
})
export class ChatRoomHeadComponent implements OnInit {
  
  //
  chatRoomLogo:string = 'http://www.koreaworld.net/wp-content/uploads/2016/08/koreaworldNetLogo.png';
  //
  chatRoomName:string = 'إسم غرفة الدردشة';
  //
  chatOnlineUsers:number = 50;

  constructor() { }

  ngOnInit() {
  }

}
