import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { TextfieldComponent } from '../../components/textfield/textfield.component';

@Component({
  selector: 'app-github',
  imports: [
    SharedModule,
    ToggleComponent,
    HeadingComponent,
    TextfieldComponent,
  ],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  githubUsername: string = '';
  githubToken: string = '';
  repositories: any[] = [];
  selectedRepo: string = '';

  constructor(private http: HttpClient) {}

  connectToGithub() {
    if (!this.githubToken) {
      console.error('GitHub token is required');
      this.repositories = [];
      return;
    } else if (!this.githubUsername) {
      console.error('GitHub username is required');
      this.repositories = [];
      return;
    }

    // Fetch user repositories
    this.http
      .get(`https://api.github.com/user/repos`, {
        headers: { Authorization: `Bearer ${this.githubToken}` },
      })
      .subscribe(
        (repos: any) => {
          this.repositories = repos;
          console.log('Repositories fetched:', this.repositories);
        },
        (error) => {
          console.error('Error fetching repositories:', error);
        }
      );
  }

  uploadCodeToRepo() {
    if (!this.selectedRepo) {
      console.error('Please select a repository');
      return;
    }

    const fileContent = 'console.log("Hello, GitHub!");'; // Example code to upload
    const filePath = 'example.js'; // Path in the repository
    const commitMessage = 'Add example.js';

    // Create or update a file in the selected repository
    this.http
      .put(
        `https://api.github.com/repos/${this.githubUsername}/${this.selectedRepo}/contents/${filePath}`,
        {
          message: commitMessage,
          content: btoa(fileContent), // Encode file content in Base64
        },
        {
          headers: { Authorization: `Bearer ${this.githubToken}` },
        }
      )
      .subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
  }
}
