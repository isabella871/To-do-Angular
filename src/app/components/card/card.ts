import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})

export class Card {
@Input() task!: Task;
}
