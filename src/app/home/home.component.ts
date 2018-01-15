import { Component, OnInit } from '@angular/core';
import { Chat } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // private name: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.goToChat({ name: this.name, message: '' });
  }

  goToChat(chat: Chat) {
    const chatName = chat ? chat.name : 'John Doe';
    this.router.navigate(['/chat'], { queryParams: { name: chatName } });
  }

}
