import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBooksComponent } from './result-books.component';

describe('ResultBooksComponent', () => {
  let component: ResultBooksComponent;
  let fixture: ComponentFixture<ResultBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
