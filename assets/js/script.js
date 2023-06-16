function soltou(e) {
    console.log('TECLA APERTADA ' + e.code );
    console.log('SHIFT? ' + e.shiftKey);
    console.log('CRTL? ' + e.ctrlKey)
    console.log('ATL? ' + e.altKey)
    console.log('----')
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);