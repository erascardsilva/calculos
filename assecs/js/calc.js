// Funçoes de calculo porcentagem, juros parcelas e taxas de venda!!!!


function vvenda() {
    let mensagem = document.getElementById("resultado");
    let valor1 = document.querySelector("#vproduto");
    let valor2 = parseFloat(valor1.value);
    let lucrofrete = (valor2 * 0.3) + 20.0;
    let impostos = valor2 + (valor2 * 0.06);
    let valorfinal = lucrofrete + impostos;
    const menresultado = valorfinal;

    mensagem.textContent = `O produto sendo comprado a R$: ${valor2} ` +
        `somando  ao produto frete e impostos o valor cobrado deverá ser  de R$ : ${valorfinal.toFixed(2)} `;

}

function vporc() {
    let mensagem = document.getElementById("resultado");
    let porcent = document.querySelector("#vporc");
    let vporcento = document.querySelector("#qporc");
    let part = parseFloat(vporcento.value);
    let valorp = parseFloat(porcent.value);
    let px = part / 100;
    let porccalc = valorp * px;
    let porsoma = valorp + porccalc; 
    let porsubi = valorp - porccalc;

    mensagem.textContent = `${part}% de  ${valorp} é = ${porccalc.toFixed(2)} `+
                            `| ${valorp} + ${part}% é = ${porsoma.toFixed(2)}`+
                            `| ${valorp} - ${part}% é = ${porsubi.toFixed(2)} `;
}

function parcela() {
    let mensagem = document.getElementById("resultado");
    let valor5 = document.querySelector("#valorparc");
    let numero = document.querySelector("#nparce");
    let valorparcela = parseFloat(valor5.value);
    let nparcela = parseInt(numero.value);
    let parcela;
    let resul;
    let valorcobrar;

    if (nparcela == 1) {
        parcela = 4.74 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 2) {
        parcela = 9.90 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 3) {
        parcela = 4.74 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 4) {
        parcela = 9.90 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);

    }
    else if (nparcela == 5) {
        parcela = 4.74 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 6) {
        parcela = 9.90 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 7) {
        parcela = 4.74 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 8) {
        parcela = 9.90 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 9) {
        parcela = 4.74 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else if (nparcela == 10) {
        parcela = 9.90 / 100;
        resul = valorparcela - (valorparcela * parcela);
        valorcobrar = valorparcela / (1 - parcela);
    }
    else {
        alert("Digite uma parcela de 1 a 10 vezes");
    }
    let perca = valorparcela - resul;

    mensagem.textContent = `Valor da venda  R$ = ${valorparcela}  ` +
        `\n Parcelado em ${nparcela} x  ` +
        `\n | o valor que será creditado R$ = ${resul.toFixed(2)}` +
        `\n | lucro operadora de cartão R$ =  ${perca.toFixed(2)}` +
        `\n | deve cobrar o valor de R$ : ${valorcobrar.toFixed(2)}`;
}



function apagaForm() {
    document.getElementById('vproduto').value = '';
    document.getElementById('valorparc').value = '';
    document.getElementById('nparce').value = '';
    document.getElementById('vporc').value = '';
    document.getElementById('qporc').value = '';

}

