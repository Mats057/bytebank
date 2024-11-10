import Conta from "../types/conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo-component.js";

const form = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const inputTipoTransacao = form.querySelector("#tipoTransacao") as HTMLInputElement;
const inputData = form.querySelector("#data") as HTMLInputElement;
const inputValor = form.querySelector("#valor") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    alert("Preencha todos os campos");
    return;
  }

  const novaTransacao:Transacao = {
    tipo: inputTipoTransacao.value as TipoTransacao,
    valor: parseFloat(inputValor.value),
    data: new Date(inputData.value),
  };
  Conta.registrarTransacao(novaTransacao);
  SaldoComponent.atualizar();
  form.reset();
});
