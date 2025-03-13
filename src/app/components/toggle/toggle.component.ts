import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {
  @Input() text: string = 'toggle text';
  @Input() isChecked: boolean = true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggle() {
    this.isChecked = !this.isChecked;
    this.toggleChange.emit(this.isChecked);
  }
}
