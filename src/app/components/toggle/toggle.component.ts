import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {
  @Input() text: string = 'toggle text';
  isChecked = false;

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
