const calcular = document.getElementById('calcular');

function slideRange(value){
    document.getElementById('valorRange').innerHTML = value;
}

function rangeSlide(value){
    document.getElementById('rangeValue').innerHTML = value;
}

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classficao = '';

        if(valorImc < 18.5) {
            classficao = 'abaixo do peso.';
        }else if(valorImc < 25) {
            classficao = 'com peso ideal. Parabéns!!!!';
        }else if(valorImc < 30) {
            classficao = 'levemente acima do peso.';
        }else if(valorImc < 35) {
            classficao = 'com obesidade grau I.';
        }else if(valorImc < 40) {
            classficao = 'com obesidade grau II.';
        }else {
            classficao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classficao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);