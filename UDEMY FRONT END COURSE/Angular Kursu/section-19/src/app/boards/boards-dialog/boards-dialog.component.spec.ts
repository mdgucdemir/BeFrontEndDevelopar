import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsDialogComponent } from './boards-dialog.component';

describe('BoardsDialogComponent', () => {
  let component: BoardsDialogComponent;
  let fixture: ComponentFixture<BoardsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardsDialogComponent]
    });
    fixture = TestBed.createComponent(BoardsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
