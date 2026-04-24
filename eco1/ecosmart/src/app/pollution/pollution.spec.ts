import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pollution } from './pollution';

describe('Pollution', () => {
  let component: Pollution;
  let fixture: ComponentFixture<Pollution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pollution],
    }).compileComponents();

    fixture = TestBed.createComponent(Pollution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
