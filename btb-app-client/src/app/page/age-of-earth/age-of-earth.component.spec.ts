import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfEarthComponent } from './age-of-earth.component';

describe('AgeOfEarthComponent', () => {
  let component: AgeOfEarthComponent;
  let fixture: ComponentFixture<AgeOfEarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeOfEarthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
