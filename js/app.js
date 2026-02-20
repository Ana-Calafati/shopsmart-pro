const verificaV1 = document.getElementById('valor01');
const verificaV2 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');


function calcularTotal(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    // Comparação do tipo e valor (===) | (==) Compara apenas valor
    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {
    
        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>Preço: <span> R$ ${v1.toFixed(2)} </span> </li>
        <li>Quantidade: <span>${v2}</span> </li>       
        <li>O valor total é R$ ${v1.toFixed(2)} * ${v2} = <span>R$ ${(v1 * v2).toFixed(2)}</span> </li>
    </ul>

    `


};
}

function desconto(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {

       
       
        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>Valor: <span>R$ ${v1.toFixed(2)} </span> </li>
        <li>Desconto: <span>${v2}%</span> </li>       
        <li>O valor com desconto é = <span> R$ ${( v1- ((v1 * v2)/100)).toFixed(2)} </span> </li>
    </ul>

    `


};
}

function juros(){
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {

       
       
        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>Valor: <span> R$ ${v1.toFixed(2)} </span> </li>
        <li>Desconto: <span>${v2}% </span> </li>       
        <li>O valor com juros é = <span> R$ ${ (v1 + ((v1 * v2)/100)).toFixed(2)}</span> </li>
    </ul>

    `


};
}

function comissao(){
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {

       
       
        resultado.style.display ='flex';
        resultado.innerHTML =
    
        `
        <ul>
        <li>Valor: <span> R$ ${v1} </span> </li>
        <li>Comissão: <span>${v2}%</span> </li>       
        <li> A comissão é = <span>R$ ${((v1 * v2)/100)}</span> </li>
    </ul>

    `


};
}

function lucro(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {

       
       
        resultado.style.display ='flex';
        resultado.innerHTML =

        `
        <ul>
        <li>Preço da venda: R$ <span> ${v1} </span> </li>
        <li>Custo:<span> ${v2} </span> </li>       
        <li> O lucro é de = <span>R$ ${v1 - v2}</span> </li>
    </ul>

    `


};
}

function limpar() {
    resultado.style.display = 'none';
    verificaV1.value = '';
    verificaV2.value = '';
    verificaV1.focus();
}