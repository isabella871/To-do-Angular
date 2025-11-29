import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-inicio',
  imports: [FormsModule, Card, NgFor],
  templateUrl: './inicio.html',
})

export class Inicio {
  task: Task[] = [];

  newTask: Task = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: false,
    prioridad: '',
    fecha: ''
  };


  addTask(){
    this.newTask.id = this.task.length + 1;

    //Agregar tarea, el array queda lleno22
    this.task.push({...this.newTask});

    // Limpia el formulario
    this.newTask = {
      id: 0,
      titulo: '',
      descripcion: '',
      estado: false,
      prioridad: '',
      fecha:''
    };
  }
}
