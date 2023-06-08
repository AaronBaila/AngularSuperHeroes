import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFavComponent } from './heroe-fav.component';

describe('HeroeFavComponent', () => {
  let component: HeroeFavComponent;
  let fixture: ComponentFixture<HeroeFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
