function sortear() {
    let quantity = parseInt(document.getElementById('quantidade').value);
    let from = parseInt(document.getElementById('de').value);
    let to = parseInt(document.getElementById('ate').value);
    let sorted = [];
    let number;
    let result = document.getElementById('resultado');

    for (let i = 0; i < quantity; i++) {
        number = getRandomNum(from, to);
        while (sorted.includes(number)) {
            number = getRandomNum(from, to);
        }
        sorted.push(number);
    }
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorted}</label>;`
    changeButtonStatus();

}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeButtonStatus() {
    let button = document.getElementById('btn-reiniciar');
    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorted}</label>`;
    changeButtonStatus();
}