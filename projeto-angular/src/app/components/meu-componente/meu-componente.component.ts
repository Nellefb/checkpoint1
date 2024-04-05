import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppComponent],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {

  nome: string = 'Alo'
  interesses= ["Videogame", "Dança", "Cantar"];

}
