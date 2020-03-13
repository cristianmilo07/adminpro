import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    let obs = new Observable( observer => {

      let contador = 1;

      let intervalo = setInterval( () => {

        contador += 0;
        observer.next( contador );

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);

    });

    obs.subscribe(
      numero => console.log( 'Sub', numero),
      error => console.error('Error en los obs', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

}
