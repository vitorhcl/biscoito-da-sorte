import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biscoito-da-sorte';
  img_biscoito = 'assets/biscoito.png';
  img_biscoito_aberto = 'assets/biscoito-aberto.png';
  img_atual = this.img_biscoito;

  ocultar = true;
  quebrado = false;
  frases = ['A vingança nunca é plena, mata a alma e envenena',
            'Eu nunca vou te abandonar',
            'Free fire é melhor que valorant',
            'Eu sou o milior',
            'Não acredite em você',
            'O não você já tem, busca a humilhação',
            'Faz o L'];

  quebrarBiscoito(){
    this.exibirOcultar();
    this.quebrado = true;
    this.img_atual = this.img_biscoito_aberto;
  }

  exibirOcultar(){
    this.ocultar = !this.ocultar;
  }

  gerarNumeroAleatorio(){
    let numeroAleatorio = Math.random() * this.frases.length;
    return Math.floor(numeroAleatorio);
  }

  sortearFrases(){
    return this.frases[this.gerarNumeroAleatorio()];
  }
}
