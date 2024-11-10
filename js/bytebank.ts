let saldo:Number = 2760;
const saldoContent = document.querySelector(".block-saldo .valor") as HTMLElement;
const form = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const inputTipoTransacao = form.querySelector("#tipoTransacao") as HTMLInputElement;
const inputData = form.querySelector("#data") as HTMLInputElement;
const inputValor = form.querySelector("#valor") as HTMLInputElement;

const updateSaldo = (valor) => {
    console.log(saldo, valor)
    saldo += valor
    saldoContent.innerText = saldo.toString();
}

const handleTransacao = (transacao: TransacaoObject) => {
  switch (transacao.tipo) {
    case "Depósito":
      updateSaldo(transacao.valor);
      break;
    default:
      updateSaldo(transacao.valor * -1);
      break;
  }
};

updateSaldo(0);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    alert("Preencha todos os campos");
    return;
  }

  const novaTransacao:TransacaoObject = {
    tipo: inputTipoTransacao.value,
    valor: parseFloat(inputValor.value),
    data: new Date(inputData.value),
  };
  handleTransacao(novaTransacao);
  form.reset();
});

type TransacaoObject = {
  tipo: string;
  valor: number;
  data: Date;
};