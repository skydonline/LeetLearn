import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  showSettings = false;
  githubUsername = '';

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  connectToGithub() {
    if (this.githubUsername) {
      console.log(`Connecting to GitHub with username: ${this.githubUsername}`);
      // Add logic to connect to GitHub API
    } else {
      console.error('GitHub username is required');
    }
  }
}
