import { OFFERS_ALL_API } from '../offersall.api';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ProdutoEmpresaDTO } from '../models/produtoEmpresaDTO';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoEmpresaService {
  constructor(private http: Http) { }
}
