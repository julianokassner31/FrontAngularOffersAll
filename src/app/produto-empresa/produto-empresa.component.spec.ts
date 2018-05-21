import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEmpresaComponent } from './produto-empresa.component';

describe('ProdutoEmpresaComponent', () => {
  let component: ProdutoEmpresaComponent;
  let fixture: ComponentFixture<ProdutoEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
