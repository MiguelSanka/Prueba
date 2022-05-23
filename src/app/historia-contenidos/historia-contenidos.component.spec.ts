import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaContenidosComponent } from './historia-contenidos.component';

describe('HistoriaContenidosComponent', () => {
  let component: HistoriaContenidosComponent;
  let fixture: ComponentFixture<HistoriaContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaContenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
