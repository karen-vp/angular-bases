import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
/*
    Los servicios deben ser privados, porque si se importa el componente tecnicamente se expondría el servicio si lo declaramos como publico, y esa no debe ser la forma de ejecutarlo.
*/
    constructor(private dbzService: DbzService){

    }
    // NOTA: dentro de esta clase tenemos acceso a las propiedades y métodos del dbzService porque esta en su scope privado.

    // Cuando el servicio es private, podemos trabajar las propiedades del servicio con getters y setters:
    get characters(): Character[]{
      return [...this.dbzService.characters]; // se usa el operador spread para hacer una copia del arreglo characters y no trabajar sobre el arreglo original
    }

    // Estamos accediendo al metodo deleteCharacterById del servicio dbzService dentro de esta nueva funcion onDeleteCharacter.
    onDeleteCharacter(id: string): void{
      this.dbzService.deleteCharacterById(id);
    }

    // Estamos accediendo al metodo addCharacter del servicio dbzService dentro de esta nueva funcion onNewCharacter.
    onNewCharacter(character: Character): void{
      this.dbzService.addCaracter(character);
    }
}
