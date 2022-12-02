import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrComponent } from './fomr.component';

describe('FomrComponent', () => {
  let component: FomrComponent;
  let fixture: ComponentFixture<FomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
