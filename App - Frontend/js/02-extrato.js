fetch('http://ec2-54-165-208-25.compute-1.amazonaws.com:8080/api/v1/usuario/Beltrano/transacoes')
    .then(response => response.json())
    .then(data => {

        let lista = document.getElementById('lista-extrato');
        let modelo = document.getElementById('modelo-item');

        let i = 1;
        let saldo = 0;

        data.map((item) => {
            let newItem = modelo.cloneNode(true);
            newItem.querySelector('.gnome').innerHTML = i++ + ' - ' + (item.amount < 0 ? 'Gasto ' : 'Recarga ');
            newItem.querySelector('.gvalor').innerHTML = 'R$ ' + item.amount;
            lista.appendChild(newItem);

            saldo += item.amount;
        });

        document.getElementById('total').innerHTML = saldo;

    }).catch(error => {
        console.error(error);
    });