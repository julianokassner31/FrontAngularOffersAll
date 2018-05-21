import { Component, OnInit} from '@angular/core';
import { ProdutoEmpresaDTO } from '../models/produtoEmpresaDTO';
import { ProdutoDTO } from '../models/produtoDTO';
import { ProdutoEmpresaService } from './produto-empresa.service';
import { ProdutoService } from '../produto/produto.service';
import { SetorDTO } from '../models/setorDTO';
import { SetorService } from '../setor/setor.service';


@Component({
  selector: 'app-produto-empresa',
  templateUrl: './produto-empresa.component.html',
  styleUrls: ['./produto-empresa.component.css']
})

export class ProdutoEmpresaComponent implements OnInit {
  constructor(
    private produtoEmpresaService: ProdutoEmpresaService,
    private produtoService: ProdutoService,
    private setorService: SetorService
  ) {}

  produtoEmpresa: ProdutoEmpresaDTO;
  produto: ProdutoDTO;
  setores: Array<SetorDTO>;
  disabledField = false;

  ngOnInit() {
    this.produtoEmpresa = new ProdutoEmpresaDTO();
    this.produto = new ProdutoDTO();
    this.setores = new Array<SetorDTO>();
  }

  register() {
    alert( JSON.stringify(this.produtoEmpresa) );
  }

  findByEan(ean: string) {
    if ( ean !== '' ) {
      this.produto =  this.produtoService.findByEan(ean);
      this.produtoEmpresa.produto = this.produto;
      this.getSectorsByEmployer();

      if (this.produto != null) {
        this.disabledField = true;
      }
    }
  }

  getSectorsByEmployer() {
    this.setores = this.setorService.findSectors();
  }

  cleanForm() {
    this.produtoEmpresa = new ProdutoEmpresaDTO();
    this.produto = new ProdutoDTO();
    this.setores = new Array<SetorDTO>();
    this.disabledField = false;
  }
}
