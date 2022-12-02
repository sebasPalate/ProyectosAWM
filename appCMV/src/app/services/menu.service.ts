import { Injectable } from '@angular/core';

/* Creado */
export interface IMenu {
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  /* Creado */
  private listMenu: IMenu[] = [
    { title: 'Agencias', url: '/agencias', icon: '/assets/icon/agencia.svg' },
    { title: 'Canales', url: '/canales', icon: '/assets/icon/canal.svg' },
    { title: 'Clientes', url: '/clientes', icon: '/assets/icon/cliente.svg' },
    { title: 'Mecánicos', url: '/mecanicos', icon: '/assets/icon/empleado.svg' },
    { title: 'Mantenimientos', url: '/mantenimientos', icon: '/assets/icon/qr.svg' },
    { title: 'Seguimiento', url: '/seguimiento', icon: '/assets/icon/seguimiento.svg' }
  ]

  constructor() { }

  /* Creado */
  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }
}

