import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-github',
  imports: [ToggleComponent, HeadingComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {}
