import ConstrutorVeiculo from "./construtor/construtorVeiculo";

let construtor = new ConstrutorVeiculo()
construtor.setCombustivel(Combustivel.Bicombustivel)
construtor.setEspecie(Especie.Passageiro)
construtor.setTipo(Tipo.Automovel)
let veiculo = construtor.obterObjeto()