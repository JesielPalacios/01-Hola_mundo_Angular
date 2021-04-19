import { Component } from '@angular/core'; // De aquí siempre se exportan los componentes.

@Component({
    selector: 'app-body', // Las '' se llaman apóstrofes.
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}

