import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InfoComponent } from './info/info.component';
import { ResidentComponent } from './resident/resident.component';

const routes: Routes = [
  {
    path: 'planets',
    /* redirectTo: 'errors/coming-soon', */
    component: CardComponent,
    pathMatch: 'full',
  },

  {
    path: 'info/:planet',
    component: InfoComponent,
  },
  {
    path: 'resident/:name',
    component: ResidentComponent,
  },
  {
    path: '**',
    redirectTo: 'planets',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
