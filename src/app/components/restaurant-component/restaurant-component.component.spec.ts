import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantComponentComponent } from './restaurant-component.component';

describe('RestaurantComponentComponent', () => {
  let component: RestaurantComponentComponent;
  let fixture: ComponentFixture<RestaurantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
