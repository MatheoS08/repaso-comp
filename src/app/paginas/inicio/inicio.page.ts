import { Component, OnInit } from '@angular/core';

interface Componentes {
  icono: string;
  nombre: string;
  direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [{

    icono: 'apps-outline',
    nombre: 'Acciones',
    direccion: '/acciones'
  },
  {
    icono: 'alert-circle-outline',
    nombre: 'Alertas',
    direccion: '/alertas'
  },
  {
    icono: 'person-outline',
    nombre: 'Avatar',
    direccion: '/avatar'
  },
  {
    icono: 'radio-button-on-outline',
    nombre: 'Botones',
    direccion: '/botones'
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
