import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { ViewBoardComponent } from './view-board/view-board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'boards' },
  { path: 'boards', component: BoardsComponent },
  { path: 'view-board/:boardIndex', component: ViewBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
