import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  node = {
    name: 'root',
    children: [
      {
        name: 'child1',
        children: []

      },
      {
        name: 'child2',
        children: []
      }
    ]
  }
}
