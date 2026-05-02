// Constantes para cores
const cores = {
    rosa: "#f48fb1",
    amarelo: "#fff176",
    azul: "#81d4fa",
    verde: "#a5d6a7"
};

// Função para mudar a cor do select (chame em onchange do select)
function mudarCor(selectElement) {
    const corSelecionada = selectElement.value;
    if (cores[corSelecionada]) {
        selectElement.style.backgroundColor = cores[corSelecionada];
        selectElement.style.color = "#000"; // Ajuste a cor do texto se necessário
    }
}

function criarPostit() {
    const texto = document.getElementById('textoPostit').value;
    const cor = document.getElementById('corPostit').value;

    //coreeção aplicada para não mudar do body para a cor do post-it
    const mural = document.getElementById('mural');

    if (texto === "") {
        alert("Escreva algo primeiro!");
        return;
    }

    // Criando o elemento post-it
    const novoPostit = document.createElement('div');
    novoPostit.classList.add('postit');
    novoPostit.classList.add(cor);
    novoPostit.innerText = texto;
    novoPostit.addEventListener('click', function () {
        this.remove();
    });

    // Adicionando ao mural
    mural.appendChild(novoPostit);


    // Limpando o campo
    document.getElementById('textoPostit').value = "";
}
//limpar mural//
function limparpostit() {
    const mural = document.getElementById('mural');
    mural.innerHTML = "";
}
document.getElementById('limparpostit').addEventListener('click', function () {
    limparpostit();
});

document.getElementById('excluir').addEventListener('click', function () {
    limparmural();
});

function limparmural() {
    const mural = document.getElementById('mural');
    mural.innerHTML = "";
}
document.getElementById('excluir').addEventListener('click', function () {
    limparmural();
});

// Função para adicionar exclusão a um botão existente
function adicionarEventoExcluir(botao) {
    botao.addEventListener('click', function(e) {
        // e.target é o botão, parentElement é o .postit
        const postit = e.target.parentElement;
        postit.remove(); // Remove o post-it do mural
    });
}

// Inicializar botões existentes (se houver)
const botoes = document.querySelectorAll('.btn-excluir');
botoes.forEach(adicionarEventoExcluir);

// Se você adiciona post-its dinamicamente, chame 'adicionarEventoExcluir' 
// sempre que criar um novo post-it.