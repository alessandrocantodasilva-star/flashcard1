// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cartao');
    const counter = document.getElementById('contador');
    let viewedCards = new Set();

    // Função para atualizar o contador
    function updateCounter() {
        if (counter) {
            counter.textContent = `Cartões visualizados: ${viewedCards.size} / ${cards.length}`;
        }
    }

    // Adiciona clique para virar o cartão
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');

            // Marca como visualizado
            const cardId = card.dataset.id || card.querySelector('p').textContent.substring(0, 30);
            viewedCards.add(cardId);
            updateCounter();
        });
    });

    // Botão "Virar Todos"
    const flipAllBtn = document.getElementById('flip-all');
    if (flipAllBtn) {
        flipAllBtn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.add('flipped');
                const cardId = card.dataset.id || card.querySelector('p').textContent.substring(0, 30);
                viewedCards.add(cardId);
            });
            updateCounter();
        });
    }

    // Botão "Resetar"
    const resetBtn = document.getElementById('reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            cards.forEach(card => card.classList.remove('flipped'));
            viewedCards.clear();
            updateCounter();
        });
    }

    // Inicializa o contador
    updateCounter();
});
