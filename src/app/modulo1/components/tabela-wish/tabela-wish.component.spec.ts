import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaWishComponent } from './tabela-wish.component';

describe('TabelaWishComponent', () => {
  let component: TabelaWishComponent;
  let fixture: ComponentFixture<TabelaWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaWishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
