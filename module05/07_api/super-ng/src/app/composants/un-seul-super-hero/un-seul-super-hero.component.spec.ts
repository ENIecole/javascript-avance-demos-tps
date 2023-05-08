import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSeulSuperHeroComponent } from './un-seul-super-hero.component';

describe('UnSeulSuperHeroComponent', () => {
  let component: UnSeulSuperHeroComponent;
  let fixture: ComponentFixture<UnSeulSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnSeulSuperHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnSeulSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
