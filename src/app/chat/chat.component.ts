import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService, Chat } from '../shared';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  chats: Array<Chat> = [];
  name = 'John Doe';
  message = '';
  private routeSubscription: ISubscription;
  private chatSubscription: ISubscription;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParamMap
      .subscribe((params: ParamMap) =>
          this.name = params.get('name') || this.name);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.chatSubscription.unsubscribe();
  }

  sendChat(message) {
    this.chats.push({ name: this.name, message: this.message });
    const chat = { name: 'Echo Bot', message: this.message};
    this.chatSubscription = this.chatService.sendChat(chat)
      .subscribe(responseChat => {
        if (responseChat) {
          this.pushChat(Object.assign(chat, responseChat));
        }
      });
  }

  pushChat(chat: Chat) {
    this.chats.push(chat);
  }

}
