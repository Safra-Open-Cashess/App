window.onload = function() {
    let valor = localStorage.getItem('valor-recarga');
    document.getElementById('rec-valor').innerHTML = valor.replace('.', ',');
};