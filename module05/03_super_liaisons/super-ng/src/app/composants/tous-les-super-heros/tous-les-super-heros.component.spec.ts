import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesSuperHerosComponent } from './tous-les-super-heros.component';

describe('TousLesSuperHerosComponent', () => {
  let component: TousLesSuperHerosComponent;
  let fixture: ComponentFixture<TousLesSuperHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousLesSuperHerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TousLesSuperHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
