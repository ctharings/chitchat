import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chat } from './chat.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ChatService {
  private readonly URL = '//messages.getsandbox.com/message';

  constructor(protected httpClient: HttpClient) {}

  public sendChat(chat: Chat): Observable<Chat> {
    return this.httpClient.post<Chat>( `${this.URL}`, JSON.stringify(chat), HEADER);
      // .map(res => res.json());
  }
}
