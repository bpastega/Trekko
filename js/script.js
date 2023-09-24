document.addEventListener('DOMContentLoaded', function() {//
    const colorMenu = document.querySelector('.color-menu');//cria a variável colorMenu para armazenar a seleção do usuário
    const toggleButton = document.getElementById('menu-close');//faz a 
    
    
toggleButton.addEventListener('click', function() {
    colorMenu.classList.toggle('menu-hidden');//se clicar no botão, o menu será escondido no modo toggle
});

const colorList = document.querySelector('.colors-list');
    
colorList.addEventListener('click', function(event) {
    const colorBox = event.target.closest('.color');
        if (colorBox) {
            const color = colorBox.style.background;
            document.body.style.backgroundColor = color;
        }
    });
});
