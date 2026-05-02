function criarPostit() {
    const texto = document.getElementById('textoPostit').value;
    const cor = document.getElementById('corPostit').value;
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

    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'X';
    btnExcluir.classList.add('btn-excluir');

    btnExcluir.onclick = function () {
        novoPostit.remove();
    };

    // Adicionando ao mural
    mural.appendChild(novoPostit);

    const p = document.createElement('p');
    p.innerText = texto;

    novoPostit.appendChild(btnExcluir);
    novoPostit.appendChild(p);

    mural.appendChild(novoPostit);

    document.getElementById('textoPostit').value = "";
}
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



