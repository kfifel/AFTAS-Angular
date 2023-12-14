import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetitionComponent } from './detail-competition.component';

describe('DetailCompetitionComponent', () => {
  let component: DetailCompetitionComponent;
  let fixture: ComponentFixture<DetailCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
