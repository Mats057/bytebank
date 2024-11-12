import { TipoTransacao } from "./TipoTransacao.js";
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => key === "data" ? new Date(value) : value) || [];
let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
const debitar = (valor) => {
    if (valor <= 0) {
        throw new Error("O Valor deve ser maior que 0");
    }
    if (valor > saldo) {
        throw new Error("O Valor da transação deve ser maior que o saldo");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
};
const depositar = (valor) => {
    if (valor <= 0) {
        throw new Error("O Valor deve ser maior que 0");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
};
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const transacoesOrdernadas = structuredClone(transacoes).sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = '';
        for (let transacao of transacoesOrdernadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-BR", { month: 'long', year: 'numeric' });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        switch (novaTransacao.tipo) {
            case TipoTransacao.DEPOSITO:
                depositar(novaTransacao.valor);
                break;
            case TipoTransacao.TRANSFERENCIA || TipoTransacao.PAGAMENTO_BOLETO:
                debitar(novaTransacao.valor);
                novaTransacao.valor *= -1;
                break;
            default:
                throw new Error("Tipo de transação inválida");
        }
        transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
};
export default Conta;
