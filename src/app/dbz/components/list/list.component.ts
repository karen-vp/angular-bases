import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /*
    @Input() - con este decorador estamos indicando que mi componente puede recibir una propiedad llamada characterList en este caso porque la estamos poniendo en esa propiedad, o le podemos indicar nombre en formato string, usualmente se recomienda mandarlo con el nombre de la propiedad.
  */
    @Input()
    public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }]

    /*
        Emisor para emitir el index del elemento del componente hijo al padre
    */
    @Output()
    public onDelete : EventEmitter<string> = new EventEmitter();


    onDeleteCharacter(id? : string):void{
      // TODO: Emitir el ID del personaje
      if(!id) return;
      this.onDelete.emit(id);
    }
}
