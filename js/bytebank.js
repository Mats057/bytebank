var saldo = 2760;
var saldoContent = document.querySelector(".block-saldo .valor");
var form = document.querySelector(".block-nova-transacao form");
var inputTipoTransacao = form.querySelector("#tipoTransacao");
var inputData = form.querySelector("#data");
var inputValor = form.querySelector("#valor");
var updateSaldo = function (valor) {
    console.log(saldo, valor);
    saldo += valor;
    saldoContent.innerText = saldo.toString();
};
var handleTransacao = function (transacao) {
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
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        alert("Preencha todos os campos");
        return;
    }
    var novaTransacao = {
        tipo: inputTipoTransacao.value,
        valor: parseFloat(inputValor.value),
        data: new Date(inputData.value),
    };
    handleTransacao(novaTransacao);
    form.reset();
});
