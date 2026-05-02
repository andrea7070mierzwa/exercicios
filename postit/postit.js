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

    // Adicionando ao mural
    mural.appendChild(novoPostit);

    // Limpando o campo
    document.getElementById('textoPostit').value = "";
}
