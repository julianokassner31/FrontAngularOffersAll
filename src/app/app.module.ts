import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoEmpresaComponent } from './produto-empresa/produto-empresa.component';
import { HttpModule } from '@angular/http';
import { ProdutoEmpresaService } from './produto-empresa/produto-empresa.service';
import { ProdutoService } from './produto/produto.service';
import { SetorService } from './setor/setor.service';
import { ProdutoComponent } from './produto/produto.component';
import { SetorComponent } from './setor/setor.component';
import { MzSelectModule, MzCheckboxModule, MzButtonModule, MzInputModule, MzValidationModule, MzCollectionModule } from 'ng2-materialize';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    AppComponent,
    ProdutoEmpresaComponent,
    ProdutoComponent,
    SetorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    MzButtonModule,
    MzInputModule,
    MzValidationModule,
    MzCollectionModule,
    MzCheckboxModule,
    MzSelectModule,
    CurrencyMaskModule
  ],
  providers: [
    ProdutoEmpresaService,
    ProdutoService,
    SetorService,
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
