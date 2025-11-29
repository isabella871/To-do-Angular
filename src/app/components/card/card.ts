import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
})

export class Card {
  // Card espera recibir (como propiedad) una variable llamada task del tipo Task => <app-card [task]="t"></app-card>
  @Input() task!: Task;
}
