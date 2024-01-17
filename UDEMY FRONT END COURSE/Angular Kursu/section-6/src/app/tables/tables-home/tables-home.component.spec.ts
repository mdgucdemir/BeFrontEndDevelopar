import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesHomeComponent } from './tables-home.component';

describe('TablesHomeComponent', () => {
  let component: TablesHomeComponent;
  let fixture: ComponentFixture<TablesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesHomeComponent]
    });
    fixture = TestBed.createComponent(TablesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
