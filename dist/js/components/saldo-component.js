import Conta from "../types/conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const saldoContent = document.querySelector(".block-saldo .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
const renderizarSaldo = () => {
    saldoContent.innerText = formatarMoeda(Conta.getSaldo());
};
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    },
};
renderizarSaldo();
export default SaldoComponent;