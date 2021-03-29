import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccomendationComponent } from './reccomendation.component';

describe('ReccomendationComponent', () => {
  let component: ReccomendationComponent;
  let fixture: ComponentFixture<ReccomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReccomendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReccomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
