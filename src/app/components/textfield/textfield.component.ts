import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textfield',
  imports: [],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.css',
})
export class TextfieldComponent {
  @Input() placeholder: string = '';
}
