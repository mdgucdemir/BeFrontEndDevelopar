import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css'],
})
export class BoardsDialogComponent {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<BoardsDialogComponent>,
    private boardService: BoardService
  ) {}

  close() {
    this.dialogRef.close();
  }

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value);
    this.dialogRef.close();
  }
}
