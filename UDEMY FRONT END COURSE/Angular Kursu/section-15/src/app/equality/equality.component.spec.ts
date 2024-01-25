import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityComponent } from './equality.component';

describe('EqualityComponent', () => {
  let component: EqualityComponent;
  let fixture: ComponentFixture<EqualityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EqualityComponent]
    });
    fixture = TestBed.createComponent(EqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
