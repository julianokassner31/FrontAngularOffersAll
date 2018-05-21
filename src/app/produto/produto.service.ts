import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { OFFERS_ALL_API} from '../offersall.api';
import { Body } from '@angular/http/src/body';
import { ProdutoDTO } from '../models/produtoDTO';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) {}
  produto = new ProdutoDTO();

  findByEan(ean: string): ProdutoDTO {
    this.produto.codigoBarras = ean;
    const promise = new Promise((resolve, reject) => {
    const apiURL = `${OFFERS_ALL_API}/product/find`;
      this.http.post(apiURL, this.produto)
        .toPromise()
        .then(
          res => {this.produto = res.json();
          resolve();
          console.log(this.produto);
          },
          msg => {reject(msg);
            console.log(msg);
          }
        );
    });
    return this.produto;
  }
}
