import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-textfield',
  imports: [SharedModule],
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
})
export class TextfieldComponent {
  @Input() placeholder: string = '';
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onInputChange(value: any) {
    this.modelChange.emit(value);
  }
}
