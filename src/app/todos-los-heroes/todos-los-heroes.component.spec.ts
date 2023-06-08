import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosHeroesComponent } from './todos-los-heroes.component';

describe('TodosLosHeroesComponent', () => {
  let component: TodosLosHeroesComponent;
  let fixture: ComponentFixture<TodosLosHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosLosHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosLosHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
