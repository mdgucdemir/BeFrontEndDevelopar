import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';

const routes: Routes = [
  {
    path: '',
    component:
      PlaceholdersHomeComponent /* lazyLoadingde path verdik o yuzden buradaki path degerini bos verdik. Vermesekdik | .../placeholders/placeholder/  |  gibi sacma birsey olacakti */,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceholdersRoutingModule {}
