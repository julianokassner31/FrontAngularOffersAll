import { Component, OnInit } from '@angular/core';
import { SetorService } from '../setor/setor.service';
import { SetorDTO } from '../models/setorDTO';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  constructor(private setorService: SetorService) { }
  setores = new Array<SetorDTO>();
  ngOnInit() {
  }

  public findSectors() {
    this.setores = this.setorService.findSectors();
    return this.setores;
  }

}
