import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textfield',
  standalone: true,
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
})
export class TextfieldComponent {
  @Input() placeholder: string = '';
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.modelChange.emit(inputElement.value);
    }
  }
}
