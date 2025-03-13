import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [SharedModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  constructor(public router: Router) {}
  githubUsername = '';

  connectToGithub() {
    if (this.githubUsername) {
      console.log(`Connecting to GitHub with username: ${this.githubUsername}`);
      // Add logic to connect to GitHub API
    } else {
      console.error('GitHub username is required');
    }
  }
}
