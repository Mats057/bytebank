const form = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const inputTipoTransacao = form.querySelector("#tipoTransacao") as HTMLInputElement;
const inputData = form.querySelector("#data") as HTMLInputElement;
const inputValor = form.querySelector("#valor") as HTMLInputElement;

const handleTransacao = (transacao: Transacao) => {
  switch (transacao.tipo) {
    case TipoTransacao.DEPOSITO:
      updateSaldo(transacao.valor);
      break;
    default:
      updateSaldo(transacao.valor * -1);
      break;
  }
};

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
  handleTransacao(novaTransacao);
  form.reset();
});
