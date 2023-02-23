const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = []; 

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (numeros.includes(parseInt(inputNumeroContato.value))){
        alert (`O telefone - ${inputNumeroContato.value} ja existe na agenda!`)
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '<tr>';
        
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}