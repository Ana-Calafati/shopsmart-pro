
// 1. ERRO: escopo global, capturando os elementos apenas uma vez para reutilizar
const campoV1 = document.getElementById('valor01');
const campoV2 = document.getElementById('valor02');
const elementoResultado = document.getElementById('resultado');

/**
 * 2. FUNÇÃO DE VALIDAÇÃO REUTILIZÁVEL
 * Verifica se os campos estão vazios ou se não são números válidos.
 */
function validarDados() {
    const v1 = campoV1.value;
    const v2 = campoV2.value;

    if (v1 === '' || v2 === '' || isNaN(parseFloat(v1)) || isNaN(parseFloat(v2))) {
        alert("Erro: Por favor, digite números válidos em ambos os campos.");
        return false;
    }
    return true;
}

// --- FUNÇÕES DE OPERAÇÃO ---

function calcularTotal() {
    if (!validarDados()) return;

    let v1 = parseFloat(campoV1.value);
    let v2 = parseFloat(campoV2.value);
    let total = v1 * v2;

    elementoResultado.style.display = 'flex';
    elementoResultado.innerHTML = `
        <ul>
            <li>Preço: <span>R$ ${v1.toFixed(2)}</span></li>
            <li>Quantidade: <span>${v2}</span></li>       
            <li>O valor total é ${v1.toFixed(2)} * ${v2} = <span>R$ ${total.toFixed(2)}</span></li>
        </ul>`;
}

function desconto() {
    if (!validarDados()) return;

    let v1 = parseFloat(campoV1.value);
    let v2 = parseFloat(campoV2.value); // Aqui v2 representa a porcentagem
    let valorDesconto = (v1 * v2) / 100;
    let resultadoFinal = v1 - valorDesconto;

    elementoResultado.style.display = 'flex';
    elementoResultado.innerHTML = `
        <ul>
            <li>Valor Inicial: <span>R$ ${v1.toFixed(2)}</span></li>
            <li>Percentual de Desconto: <span>${v2}%</span></li>       
            <li>O valor com desconto é: <span>R$ ${resultadoFinal.toFixed(2)}</span></li>
        </ul>`;
}

function juros() {
    if (!validarDados()) return;

    let v1 = parseFloat(campoV1.value);
    let v2 = parseFloat(campoV2.value);
    let valorJuros = (v1 * v2) / 100;
    let resultadoFinal = v1 + valorJuros;

    elementoResultado.style.display = 'flex';
    elementoResultado.innerHTML = `
        <ul>
            <li>Valor Inicial: <span>R$ ${v1.toFixed(2)}</span></li>
            <li>Percentual de Juros: <span>${v2}%</span></li>       
            <li>O valor final com juros é: <span>R$ ${resultadoFinal.toFixed(2)}</span></li>
        </ul>`;
}

function comissao() {
    if (!validarDados()) return;

    let v1 = parseFloat(campoV1.value);
    let v2 = parseFloat(campoV2.value);
    let valorComissao = (v1 * v2) / 100;

    elementoResultado.style.display = 'flex';
    elementoResultado.innerHTML = `
        <ul>
            <li>Valor da Venda: <span>R$ ${v1.toFixed(2)}</span></li>
            <li>Percentual de Comissão: <span>${v2}%</span></li>       
            <li>O valor da comissão é: <span>R$ ${valorComissao.toFixed(2)}</span></li>
        </ul>`;
}

function lucro() {
    if (!validarDados()) return;

    let v1 = parseFloat(campoV1.value);
    let v2 = parseFloat(campoV2.value);
    let valorLucro = v1 - v2;

    elementoResultado.style.display = 'flex';
    elementoResultado.innerHTML = `
        <ul>
            <li>Preço de Venda: <span>R$ ${v1.toFixed(2)}</span></li>
            <li>Custo: <span>R$ ${v2.toFixed(2)}</span></li>       
            <li>O lucro líquido é de: <span>R$ ${valorLucro.toFixed(2)}</span></li>
        </ul>`;
}

/**
 * 7. FUNÇÃO LIMPAR CORRIGIDA
 */
function limpar() {
    elementoResultado.style.display = 'none';
    campoV1.value = '';
    campoV2.value = '';
    campoV1.focus();
}