const toggleTheme = document.getElementById('toggle-theme');


toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');    

    // Atualizar o texto do link dependendo do tema atual
    if (document.body.classList.contains('dark-mode')) {
        toggleTheme.textContent = 'Ativar Modo Claro';
    } else {
        toggleTheme.textContent = 'Ativar Modo Escuro';
    }
});

function aumentaFonte() {
    var elementos = document.getElementsByTagName('*');
    for (var i = 0; i < elementos.length; i++) {
        var estilo = window.getComputedStyle(elementos[i], null).getPropertyValue('font-size');
        var tamanhoAtual = parseFloat(estilo);
        elementos[i].style.fontSize = (tamanhoAtual + 2) + 'px';
    }
}

function diminuiFonte() {
    var elementos = document.getElementsByTagName('*');
    for (var i = 0; i < elementos.length; i++) {
        var estilo = window.getComputedStyle(elementos[i], null).getPropertyValue('font-size');
        var tamanhoAtual = parseFloat(estilo);
        elementos[i].style.fontSize = (tamanhoAtual - 2) + 'px';
    }
}

function readText() {
    const texto = document.getElementById('resultados');
    const utterance = new SpeechSynthesisUtterance(texto.textContent.replace('Copiar',''));
  
    // Personalizando a voz (opcional)
    utterance.voice = speechSynthesis.getVoices()[1]; // Escolhe a primeira voz disponível
 utterance.rate = 1; // Ajusta a velocidade (1 é normal)
     utterance.pitch = 1; // Ajusta o tom (1 é normal)
  
    speechSynthesis.speak(utterance);
  }


  const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

  