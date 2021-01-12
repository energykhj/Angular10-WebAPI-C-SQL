import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStdComponent } from './add-edit-std.component';

describe('AddEditStdComponent', () => {
  let component: AddEditStdComponent;
  let fixture: ComponentFixture<AddEditStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
