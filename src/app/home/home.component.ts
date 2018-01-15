import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToChat() {
    const chatName = this.name || 'John Doe';
    this.router.navigate(['/chat'], { queryParams: { name: chatName } });
  }

}
