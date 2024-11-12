import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(
  ".extrato .registro-transacoes"
);

const renderizarExtrato = (): void => {
  const gruposTransacoes = Conta.getGruposTransacoes();
  elementoRegistroTransacoesExtrato.innerHTML = "";
  let htmlExtrato: string = "";

  for (let grupoTransacao of gruposTransacoes) {
    let htmlTransacaoItem: string = "";
    for (let transacao of grupoTransacao.transacoes) {
      htmlTransacaoItem += `
                    <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipo}</span>
                            <strong class="valor">${formatarMoeda(
                              transacao.valor
                            )}</strong>
                        </div>
                        <time class="data">${formatarData(
                          transacao.data,
                          FormatoData.DIA_MES
                        )}</time>
                    </div>
            `;
    }
    htmlExtrato += `
    <div class="transacoes-group">
        <strong class="mes-group">${grupoTransacao.label}</strong>
        ${htmlTransacaoItem}
    </div>
  `;
  }

  if (htmlExtrato === "") {
    htmlExtrato = "<div>Não há transações registradas</div>";
  }

  elementoRegistroTransacoesExtrato.innerHTML = htmlExtrato;
};

const ExtratoComponent = {
  atualizar() {
    renderizarExtrato();
  },
};

renderizarExtrato();

export default ExtratoComponent;
