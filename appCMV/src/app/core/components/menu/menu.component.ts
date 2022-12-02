import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'cmv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /* Añadido */
  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();
  listMenu: IMenu[]
  expanded = true;

  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu();
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
    this.onToggleExpanded.emit(this.expanded);
  }
  /* Fin */

  ngOnInit(): void {
  }

}
