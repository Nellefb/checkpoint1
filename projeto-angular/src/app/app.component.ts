import { Component, Input } from '@angular/core';
import { MeuComponenteComponent } from './components/meu-componente/meu-componente.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuComponenteComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensagem:String = "Olá Mundo";






}
