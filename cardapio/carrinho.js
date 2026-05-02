document.addEventListener('DOMContentLoaded', function () {
    const listaHtml = document.getElementById('itens-carrinho');
    const totalHtml = document.getElementById('total');
    
    // 1. Buscamos os dados que o cardapio.js salvou no "localStorage"
    const dadosSalvos = localStorage.getItem('meuCarrinho');
    const carrinho = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    if (carrinho.length > 0) {
        listaHtml.innerHTML = ""; // Limpa o texto "Vazio"
        let somaTotal = 0;

        // 2. Criamos o HTML para cada item da lista (Entrelaçamento!)
        carrinho.forEach((item, index) => {
            const divItem = document.createElement('div');
            divItem.style.borderBottom = "1px solid #eee";
            divItem.style.padding = "10px";
            divItem.innerHTML = `<strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}`;
            
            listaHtml.appendChild(divItem);
            somaTotal += item.preco;
        });

        totalHtml.innerText = `Total: R$ ${somaTotal.toFixed(2)}`;
    }
});

function finalizarPedido() {
    alert("Pedido enviado para a cozinha! Bom apetite!");
    limparCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem('meuCarrinho');
    window.location.reload(); // Recarrega a página para atualizar a tela
}