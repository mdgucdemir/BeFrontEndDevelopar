import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoardDialogComponent } from './view-board-dialog.component';

describe('ViewBoardDialogComponent', () => {
  let component: ViewBoardDialogComponent;
  let fixture: ComponentFixture<ViewBoardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBoardDialogComponent]
    });
    fixture = TestBed.createComponent(ViewBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
