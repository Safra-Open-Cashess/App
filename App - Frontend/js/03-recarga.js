window.onload = function() {
    document.querySelector('input').focus();

    document.querySelector('#input-valor').addEventListener('change', function() {
        let valor = this.value.replace(/[R$\s]/ig, '').replace(',','.');
        localStorage.setItem('valor-recarga', valor);
    });

};