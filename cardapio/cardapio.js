// Criamos uma lista vazia para armazenar o pedido
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    // Adiciona o objeto ao array
    carrinho.push({ nome: nome, preco: preco });
    
    // Soma ao total
    total += preco;
    
    // Alerta o usuário (Feedback visual!)
    alert(`${nome} adicionado! Total: R$ ${total.toFixed(2)}`);
    
    // Opcional: Salvar no navegador para ver no carrinho.html (avançado)
    localStorage.setItem('meuCarrinho', JSON.stringify(carrinho));
}

// Ativa o modo escuro que você tentou fazer
document.addEventListener('DOMContentLoaded', function() {
    const tela = document.getElementById("tela");
    if(tela) {
        tela.classList.add("modo-escuro");
    }
});