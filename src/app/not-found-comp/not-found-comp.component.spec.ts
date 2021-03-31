import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCompComponent } from './not-found-comp.component';

describe('NotFoundCompComponent', () => {
  let component: NotFoundCompComponent;
  let fixture: ComponentFixture<NotFoundCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
