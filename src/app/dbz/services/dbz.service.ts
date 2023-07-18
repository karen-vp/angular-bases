import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

/*

  **Singleton Services**
  @Injectable este decorador le dice a angular que esta clase es un Servicio.

  provideIn: 'root': Indica que nuestro servicio va a ser un Singleton en la aplicacion, esto le dice a Angular que provea un servicio en la raiz de la aplicacion.

  En Angular, un Singleton es un patrón de diseño utilizado para garantizar que solo exista una instancia de una clase en toda la aplicación. En otras palabras, un Singleton asegura que haya una única instancia de una clase disponible para ser utilizada por todos los componentes y servicios que lo necesiten.

  En Angular, es común utilizar Singletons para crear servicios compartidos que almacenan y proporcionan datos o funcionalidades comunes en la aplicación. Estos servicios Singleton se crean una vez y luego se comparten entre diferentes componentes y servicios.

  Para crear un Singleton en Angular, se utiliza el sistema de inyección de dependencias de Angular. Angular proporciona un mecanismo de inyección de dependencias integrado que se encarga de crear y administrar las instancias de los servicios.

  Al marcar un servicio con el decorador @Injectable({ providedIn: 'root' }), se está configurando el servicio para que sea un Singleton. Esto significa que Angular creará una única instancia del servicio y la proporcionará a todos los componentes y servicios que lo soliciten.

*/
@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCaracter(character: Character): void {
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // Refactorizacion del codigo de newCharacter
    const newCharacter: Character = {
      id: uuid(),
      ...character // con el operador spread (...) le digo que tome todas las propiedades del objeto 'character' y esparcelas en este nuevo objeto 'newCharacter'
    }


    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !== id);
    console.log(this.characters);

  }
}
