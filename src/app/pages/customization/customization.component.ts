import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';

@Component({
  selector: 'app-customization',
  imports: [HeadingComponent, ToggleComponent],
  templateUrl: './customization.component.html',
  styleUrl: './customization.component.css',
})
export class CustomizationComponent {
  popupsEnabled: boolean = false;
  commentsEnabled: boolean = false;
  isDarkMode: boolean = true;

  ngOnInit() {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode !== null) {
      this.isDarkMode = JSON.parse(savedDarkMode);
      this.applyDarkMode(this.isDarkMode);
    }
  }

  applyDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode(this.isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));
  }

  togglePopups(isChecked: boolean) {
    this.popupsEnabled = isChecked;
  }

  toggleComments(isChecked: boolean) {
    this.commentsEnabled = isChecked;
  }
}
