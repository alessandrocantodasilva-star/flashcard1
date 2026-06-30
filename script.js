// script.js - Melhorias nos cartões da Copa do Mundo

document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.cartao');
    const counterElement = document.getElementById('contador');
    let viewed = new Set();

    // Função para atualizar o contador
    function updateCounter() {
        if (counterElement) {
            counterElement.textContent = `Você já visualizou ${viewed.size} de ${cards.length} cartões`;
        }
    }

    // Adiciona funcionalidade de clique em cada cartão
    cards.forEach((card, index) => {
        
        // Dá um ID único para cada cartão (para o contador)
        card.dataset.cardId = index;

        // Clique para virar o cartão
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');

            // Marca como visualizado
            viewed.add(card.dataset.cardId);
            updateCounter();
        });

        // Opcional: também vira com tecla Enter quando o cartão está focado
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
                viewed.add(card.dataset.cardId);
                updateCounter();
            }
        });
    });

    // ===================== BOTÃO VIRAR TODOS =====================
    const flipAllBtn = document.getElementById('flip-all');
    if (flipAllBtn) {
        flipAllBtn.addEventListener('click', function() {
            cards.forEach(card => {
                card.classList.add('flipped');
                viewed.add(card.dataset.cardId);
            });
            updateCounter();
        });
    }

    // ===================== BOTÃO RESETAR =====================
    const resetBtn = document.getElementById('reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            cards.forEach(card => {
                card.classList.remove('flipped');
            });
            viewed.clear();
            updateCounter();
        });
    }

    // Inicializa o contador
    updateCounter();
});
