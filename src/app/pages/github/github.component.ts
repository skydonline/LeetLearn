import { Component } from '@angular/core';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { HeadingComponent } from '../../components/heading/heading.component';

@Component({
  selector: 'app-github',
  imports: [ToggleComponent, HeadingComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {}
