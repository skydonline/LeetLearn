import { Routes } from '@angular/router';
import { GithubComponent } from './pages/github/github.component';
import { CustomizationComponent } from './pages/customization/customization.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full',
  },
  { path: 'github', component: GithubComponent },
  { path: 'customization', component: CustomizationComponent },
];
