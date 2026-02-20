const verificaV1 = document.getElementById('valor01');
const verificaV2 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');


function calcularTotal(){

    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);

    // Comparação do tipo e valor (===) | (==) Compara apenas valor
    if (isNaN(v1) || isNaN(v2)) {

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {
       
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Preço: <span> ${v1} </span> </li>
        <li>Quantidade: <span>${v2}</span> </li>       
        <li>O valor total é R$ ${v1.toFixed(2)} * ${v2} = <span>R$ ${(v1 * v2).toFixed(2)}</span> </li>
    </ul>

    `


};
}

function desconto(){

    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1);
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2);
    

    if (verificaV1 === '' || verificaV2 === '') {

        alert("O valor 01 ou o valor 02 está em branco, digite um numero.");

    } else {

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Valor: <span>R$ ${v1.toFixed(2)} </span> </li>
        <li>Desconto: <span>${v2}%</span> </li>       
        <li>O valor com desconto é = <span> ${( v1- ((v1 * v2)/100)).toFixed(2)} </span> </li>
    </ul>

    `


};
}

function juros(){

    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1);
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2);
    

    if (verificaV1 === '' || verificaV2 === '') {

        alert("O valor 01 ou o valor 02 está em branco, digite um numero.");

    } else {

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Valor: <span> ${v1} </span> </li>
        <li>Desconto: <span>${v2}</span> </li>       
        <li>O valor com juros é = <span>${ v1 + ((v1 * v2)/100)}</span> </li>
    </ul>

    `


};
}

function comissao(){

    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1);
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2);
    

    if (verificaV1 === '' || verificaV2 === '') {

        alert("O valor 01 ou o valor 02 está em branco, digite um numero.");

    } else {

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Valor: <span> ${v1} </span> </li>
        <li>Comissão: <span>${v2}</span> </li>       
        <li> A comissão é = <span>${((v1 * v2)/100)}</span> </li>
    </ul>

    `


};
}

function lucro(){

    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1);
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2);
    

    if (verificaV1 === '' || verificaV2 === '') {

        alert("O valor 01 ou o valor 02 está em branco, digite um numero.");

    } else {

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display ='flex';
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Preço da venda: <span> ${v1} </span> </li>
        <li>Custo: <span>${v2}</span> </li>       
        <li> O lucro é de = <span>${v1 - v2}</span> </li>
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