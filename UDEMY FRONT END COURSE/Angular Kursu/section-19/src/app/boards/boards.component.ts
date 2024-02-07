import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent {
  constructor(
    private matDialog: MatDialog,
    public boardService: BoardService
  ) {}

  openNewBoardDialog() {
    const dialogRef = this.matDialog.open(BoardsDialogComponent, {
      width: '500px',
    });
  }

  deleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }
}
