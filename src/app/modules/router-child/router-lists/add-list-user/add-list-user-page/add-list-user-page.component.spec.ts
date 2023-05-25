import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListUserPageComponent } from './add-list-user-page.component';

describe('AddListUserPageComponent', () => {
  let component: AddListUserPageComponent;
  let fixture: ComponentFixture<AddListUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListUserPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
