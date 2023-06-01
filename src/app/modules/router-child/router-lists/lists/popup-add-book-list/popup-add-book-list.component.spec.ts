import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddBookListComponent } from './popup-add-book-list.component';

describe('PopupAddBookListComponent', () => {
  let component: PopupAddBookListComponent;
  let fixture: ComponentFixture<PopupAddBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
