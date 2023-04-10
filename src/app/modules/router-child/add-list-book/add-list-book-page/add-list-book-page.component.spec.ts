import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListBookPageComponent } from './add-list-book-page.component';

describe('AddListBookPageComponent', () => {
  let component: AddListBookPageComponent;
  let fixture: ComponentFixture<AddListBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListBookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
