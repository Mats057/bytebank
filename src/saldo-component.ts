let saldo: number = 2760;
const saldoContent = document.querySelector(
  ".block-saldo .valor"
) as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso) {
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(
    dataAcesso,
    FormatoData.DIA_SEMANA_DIA_MES_ANO
  );
}
const updateSaldo = (valor) => {
  saldo += valor;
  saldoContent.innerText = formatarMoeda(saldo);
};

updateSaldo(0);
