import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStdComponent } from './show-std.component';

describe('ShowStdComponent', () => {
  let component: ShowStdComponent;
  let fixture: ComponentFixture<ShowStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
