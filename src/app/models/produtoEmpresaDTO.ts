import { EmpresaDTO } from './empresaDTO';
import { SetorDTO } from './setorDTO';
import { UsuarioDTO } from './usuarioDTO';
import { PromocaoDTO } from './promocaoDTO';
import { ProdutoDTO } from './produtoDTO';

export class ProdutoEmpresaDTO {
  public preco: number;
  public precoPromocional: number;
  public promocao: PromocaoDTO;
  public ativo: boolean;
  public unidadeMedida: String;
  public quantidadeUnidadeMedida: number;
  public produto: ProdutoDTO;
  public empresa: EmpresaDTO;
  public setor: SetorDTO;
  public usuario: UsuarioDTO;
}
