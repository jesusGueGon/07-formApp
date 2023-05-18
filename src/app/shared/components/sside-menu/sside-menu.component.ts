import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'shared-sside-menu',
  templateUrl: './sside-menu.component.html',
  styles: [
  ]
})
export class SsideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic' },
    { title: 'Dinámicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' },
  ];

}
