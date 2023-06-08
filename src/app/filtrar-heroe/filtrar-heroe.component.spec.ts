import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarHeroeComponent } from './filtrar-heroe.component';

describe('FiltrarHeroeComponent', () => {
  let component: FiltrarHeroeComponent;
  let fixture: ComponentFixture<FiltrarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
