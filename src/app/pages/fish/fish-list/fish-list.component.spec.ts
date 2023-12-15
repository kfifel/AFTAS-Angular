import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishListComponent } from './fish-list.component';

describe('FishListComponent', () => {
  let component: FishListComponent;
  let fixture: ComponentFixture<FishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
