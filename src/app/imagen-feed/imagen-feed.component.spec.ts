import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFeedComponent } from './imagen-feed.component';

describe('ImagenFeedComponent', () => {
  let component: ImagenFeedComponent;
  let fixture: ComponentFixture<ImagenFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
