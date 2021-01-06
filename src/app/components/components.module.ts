import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoUserComponent } from './repo-user/repo-user.component';
import { ComponentesRoutingModule } from './components.routing.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { DescriptionRepoPipe } from '../pipes/description-repo.pipe';
import { LineTimeCommitsComponent } from './line-time-commits/line-time-commits.component';

@NgModule({
  declarations: [
    SearchUserComponent,
    RepoUserComponent,
    DescriptionRepoPipe,
    LineTimeCommitsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentesRoutingModule,
    NgbAccordionModule,
  ],
  exports: [SearchUserComponent],
})
export class ComponentsModule {}
