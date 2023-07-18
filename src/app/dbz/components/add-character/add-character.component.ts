import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class addCharacterComponent {

  /*
      @Output() es un decorador utilizado para definir una propiedad de salida en un componente. Una propiedad de salida permite que un componente emita eventos hacia su componente padre. Estos eventos pueden ser capturados por el componente padre y se utilizan para comunicarse entre componentes.

      En este caso, onNewCharacter es una propiedad de salida definida en un componente. Es del tipo EventEmitter<Character>, que es una clase proporcionada por Angular para crear y emitir eventos personalizados. El EventEmitter se parametriza con el tipo Character, lo que significa que los eventos emitidos por esta propiedad serán del tipo Character.

      Cuando se crea una instancia de EventEmitter y se asigna a la propiedad onNewCharacter, se está creando una nueva instancia de EventEmitter que actuará como un emisor de eventos. En otras palabras, el componente podrá utilizar esta instancia para emitir eventos hacia su componente padre.
  */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {

    console.log(this.character);

    if(this.character.name.length === 0) return;
    /*
        Por ejemplo, en el componente que contiene esta propiedad de salida, podría haber una función que se ejecuta cuando se crea un nuevo personaje. Entonces se llama al método emit del EventEmitter para emitir un evento hacia el componente padre:
    */
    this.onNewCharacter.emit(this.character);
    /*
      El componente padre que esté utilizando este componente puede suscribirse a este evento y ejecutar una acción correspondiente cuando el evento sea emitido.
    */

    this.character = {name : '', power : 0};
  }
}
