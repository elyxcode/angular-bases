import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>Esto es un counter: {{ counter }}</p>
  <button (click)="increment()">Incrementar counter</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decrement()">Decrementar counter</button>
  `,
  standalone: false,
})
export class CounterComponent {
  counter: number = 0;

  increment(){

    if(this.counter === 10){
      alert('Ya llegastes a 10')
      return
    }

    this.counter += 1;
  }

  decrement(){
    if(this.counter === 0){
      alert('El valor de counter no puede ser negativo')
      return;
    }

    this.counter -= 1;
  }

  reset(){
    this.counter = 0;
  }
}
