
/*
  @Component es un decorador que convierte mi class en un componente, cuando  creamos un Component debemos especificarle un objeto que contenga un template y un selector,
    > Un template es basicamente el html en linea, y solo se trabaja con el si el codigo HTML no abarca mas de 4 lineas, por otra parte existe el templateUrl donde se especifica la URL de ese archivo html,
    > El selector es como se quiere usar este componente en el html, se acostumbra que los componentes tengan un sufijo 'app-' para indicar que es un componente personalizado.

    NOTA: en el archivo app.module.ts se debe importar el nombre de la clase de este componente en la parte de 'declarations'
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {

    this.counter += value;

  }

  resetCounter(): void {
    this.counter = 10;
  }

}
