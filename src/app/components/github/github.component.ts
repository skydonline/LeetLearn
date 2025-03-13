import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-github',
  imports: [ToggleComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {}
