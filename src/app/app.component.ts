import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SecondProject';

  toggle = true;

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
