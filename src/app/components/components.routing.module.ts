import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExistCommitsGuard } from '../guards/exist-commits.guard';
import { ExistRepoGuard } from '../guards/exist-repo.guard';
import { LineTimeCommitsComponent } from './line-time-commits/line-time-commits.component';
import { RepoUserComponent } from './repo-user/repo-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: '', component: SearchUserComponent },
  {
    path: 'repo',
    component: RepoUserComponent,
    canActivate: [ExistRepoGuard],
  },
  {
    path: 'commit',
    component: LineTimeCommitsComponent,
    canActivate: [ExistCommitsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}
