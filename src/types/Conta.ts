import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 3000;

const Conta = {
  getSaldo() {
    return saldo;
  },

  getDataAcesso(): Date {
    return new Date();
  },

  registrarTransacao(novaTransacao: Transacao) {
    switch (novaTransacao.tipo) {
      case TipoTransacao.DEPOSITO:
        saldo += novaTransacao.valor;
        break;
      default:
        saldo -= novaTransacao.valor;
        break;
    }
  },
};

export default Conta;
