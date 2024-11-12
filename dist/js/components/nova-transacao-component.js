import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const form = document.querySelector(".block-nova-transacao form");
const inputTipoTransacao = form.querySelector("#tipoTransacao");
const inputData = form.querySelector("#data");
const inputValor = form.querySelector("#valor");
form.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!form.checkValidity()) {
            alert("Preencha todos os campos");
            return;
        }
        const novaTransacao = {
            tipo: inputTipoTransacao.value,
            valor: parseFloat(inputValor.value),
            data: new Date(inputData.value + " 00:00:00"),
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        form.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
