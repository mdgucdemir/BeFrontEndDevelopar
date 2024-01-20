import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHomeComponent } from './lists-home.component';

describe('ListsHomeComponent', () => {
  let component: ListsHomeComponent;
  let fixture: ComponentFixture<ListsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsHomeComponent]
    });
    fixture = TestBed.createComponent(ListsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
