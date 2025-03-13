import { Routes } from '@angular/router';
import { GithubComponent } from './components/github/github.component';
import { CustomizationComponent } from './components/customization/customization.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full',
  },
  { path: 'github', component: GithubComponent },
  { path: 'customization', component: CustomizationComponent },
];
