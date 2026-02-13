function calcularTotal(){
    // Obter os elementos e os valores digitados pelo usuario.
    const verificaV1 = document.getElementById('valor01').value;
    console.log(verificaV1);
    const verificaV2 = document.getElementById('valor02').value;
    console.log(verificaV2);



    // Comparação do tipo e valor (===) | (==) Compara apenas valo
    if (verificaV1 === '' || verificaV2 === '') {

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>ERRO DE VALIDAÇÃO</li>
    </ul>

    `

    } else {

        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
       

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

        `
        <ul>
        <li>Preço: <span> ${v1} </span> </li>
        <li>Quantidade: <span>${v2}</span> </li>       
        <li>O valor total é ${v1} * ${v2} = <span>${v1 * v2}</span> </li>
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

        alert("O valor 01 ou o valor 02 e branco, digite um numero.");

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
        <li>O valor com desconto é = <span> ${ v1- ((v1 * v2)/100)} </span> </li>
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

        alert("O valor 01 ou o valor 02 e branco, digite um numero.");

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

        alert("O valor 01 ou o valor 02 e branco, digite um numero.");

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

        alert("O valor 01 ou o valor 02 e branco, digite um numero.");

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