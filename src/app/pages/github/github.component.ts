import { Component } from '@angular/core';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { TextfieldComponent } from '../../components/textfield/textfield.component';

@Component({
  selector: 'app-github',
  imports: [ToggleComponent, HeadingComponent, TextfieldComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  githubUsername: string = '';

  connectToGithub() {
    if (this.githubUsername) {
    } else {
      console.log('Please enter a valid GitHub username');
    }
  }
}
