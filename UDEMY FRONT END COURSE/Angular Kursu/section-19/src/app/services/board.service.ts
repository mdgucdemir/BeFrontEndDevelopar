import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  public boards: Array<any> = [];

  constructor() {
    debugger;
    let str = localStorage.getItem('boards');
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }

  public createBoard(title: any) {
    let newBoardObj = {
      title: title,
      cards: [],
    };
    this.boards.push(newBoardObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}
