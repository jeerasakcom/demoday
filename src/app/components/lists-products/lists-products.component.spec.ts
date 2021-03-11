import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsProductsComponent } from './lists-products.component';

describe('ListsProductsComponent', () => {
  let component: ListsProductsComponent;
  let fixture: ComponentFixture<ListsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
