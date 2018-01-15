import { Component, OnInit } from '@angular/core';
import { ChatService, Chat } from '../shared';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chats: Array<Chat>;

  private name: string;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe(params => this.name = params.get('name'));
  }

  sendChat(chat: Chat) {
    this.chatService.sendChat(chat)
      .subscribe(responseChat => {
        if (chat.message) {
          this.pushChat(responseChat);
        }
      });
  }

  pushChat(chat: Chat) {
    this.chats.push(chat);
  }

}
