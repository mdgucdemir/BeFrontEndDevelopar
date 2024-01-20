import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'placeholders',
    loadChildren: () =>
      import('./placeholders/placeholders.module').then(
        (m) => m.PlaceholdersModule
      ) /* loadChildren is lazyLoading Process */,
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then((m) => m.TablesModule),
    /* loadChildren is lazyLoading Process */
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./lists/lists.module').then((m) => m.ListsModule),
    /* loadChildren is lazyLoading Process */
  },
  {
    path: 'popups',
    loadChildren: () =>
      import('./popups/popups.module').then((m) => m.PopupsModule),
    /* loadChildren is lazyLoading Process */
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
