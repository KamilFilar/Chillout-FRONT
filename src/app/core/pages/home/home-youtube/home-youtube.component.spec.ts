import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeYoutubeComponent } from './home-youtube.component';

describe('HomeYoutubeComponent', () => {
  let component: HomeYoutubeComponent;
  let fixture: ComponentFixture<HomeYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
