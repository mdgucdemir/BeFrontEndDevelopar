import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayphotoComponent } from './displayphoto.component';

describe('DisplayphotoComponent', () => {
  let component: DisplayphotoComponent;
  let fixture: ComponentFixture<DisplayphotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayphotoComponent]
    });
    fixture = TestBed.createComponent(DisplayphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
