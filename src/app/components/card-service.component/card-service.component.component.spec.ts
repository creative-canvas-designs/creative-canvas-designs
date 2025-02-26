import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceComponentComponent } from './card-service.component.component';

describe('CardServiceComponentComponent', () => {
  let component: CardServiceComponentComponent;
  let fixture: ComponentFixture<CardServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServiceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
