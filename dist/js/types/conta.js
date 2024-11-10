import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
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
