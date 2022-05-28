import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionUsuarioComponent } from './publicacion-usuario.component';

describe('PublicacionUsuarioComponent', () => {
  let component: PublicacionUsuarioComponent;
  let fixture: ComponentFixture<PublicacionUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
