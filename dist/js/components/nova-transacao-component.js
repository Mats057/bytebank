import Conta from "../types/conta.js";
import SaldoComponent from "./saldo-component.js";
const form = document.querySelector(".block-nova-transacao form");
const inputTipoTransacao = form.querySelector("#tipoTransacao");
const inputData = form.querySelector("#data");
const inputValor = form.querySelector("#valor");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        alert("Preencha todos os campos");
        return;
    }
    const novaTransacao = {
        tipo: inputTipoTransacao.value,
        valor: parseFloat(inputValor.value),
        data: new Date(inputData.value),
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    form.reset();
});
