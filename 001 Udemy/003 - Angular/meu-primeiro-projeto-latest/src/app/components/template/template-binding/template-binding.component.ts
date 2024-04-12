import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
public name = 'Leandro Vilar';
public age = 44;
public condition = this.age > 1 ? 'Teste' : 'Teste2';

public isDisabled = true;
public srcValue = 'https://blog.logrocket.com/wp-content/uploads/2021/04/Angular-in-memory-web-api-tutorial.jpg'

//codificacao so para teste
public sum(val1: number, val2: number){
  return val1 + val2;
}
}
