function interruptor(idDaLampada) {
    // O JS busca exatamente a lâmpada que você clicou pelo ID
    const lampadaSelecionada = document.getElementById(idDaLampada);
    
    // Entrelaçamento: o JS liga/desliga a classe CSS '.acesa'
    lampadaSelecionada.classList.toggle('acesa');
}
button.addEventListener('click', function() {
    interruptor('lampada1');
});
button2.addEventListener('click', function() {
    interruptor('lampada2');
});
button3.addEventListener('click', function() {
    interruptor('lampada3');
});
button4.addEventListener('click', function() {
    interruptor('lampada4');
});
document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        interruptor('lampada1');
    } else if (event.key === '2') {
        interruptor('lampada2');
    } else if (event.key === '3') {
        interruptor('lampada3');
    } else if (event.key === '4') {
        interruptor('lampada4');
    }
});