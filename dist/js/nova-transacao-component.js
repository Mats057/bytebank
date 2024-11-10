const form = document.querySelector(".block-nova-transacao form");
const inputTipoTransacao = form.querySelector("#tipoTransacao");
const inputData = form.querySelector("#data");
const inputValor = form.querySelector("#valor");
const handleTransacao = (transacao) => {
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
    const novaTransacao = {
        tipo: inputTipoTransacao.value,
        valor: parseFloat(inputValor.value),
        data: new Date(inputData.value),
    };
    handleTransacao(novaTransacao);
    form.reset();
});
