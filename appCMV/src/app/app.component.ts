import { Component } from '@angular/core';

@Component({
  selector: 'cmv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCMV';
  
  /* Creado */
  expanded = true;

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
