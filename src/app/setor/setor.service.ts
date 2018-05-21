import {Http, Headers, RequestOptionsArgs, Response, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { OFFERS_ALL_API} from '../offersall.api';
import { Body } from '@angular/http/src/body';
import { SetorDTO } from '../models/setorDTO';

@Injectable()
export class SetorService {

  constructor(private http: Http) {}
  setores = new Array<SetorDTO>();

  findSectors(): Array<SetorDTO> {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('idempresa', '1');
    this.http.get(`${OFFERS_ALL_API}/employer/sector`, {headers: headers})
      .subscribe((res: Response) => this.setores = res.json());
      console.log(this.setores);
      return this.setores;
  }
}
