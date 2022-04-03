fetch('http://ec2-54-165-208-25.compute-1.amazonaws.com:8080/api/v1/loja/1/transacao')
    .then(response => response.json())
    .then(data => {
        const realizadas = document.querySelector('#realizadas');
        var i = 0;
        var aprovadas = 0;
        var debito = 0;
        var credito = 0;

        data.map((item) => {
            i++;
            if (item.transactionStatus == "APPROVED") {
                aprovadas++;

                if (item.amount > 0) {
                    credito += item.amount;
                } else {
                    debito += item.amount;
                }
            }

        });
        const h1Transacoes = document.createElement('h1');
        h1Transacoes.innerHTML = i;
        realizadas.appendChild(h1Transacoes)

        const aprov = document.querySelector('#aprovadas');
        const h1Aprovadas = document.createElement('h1');
        h1Aprovadas.innerHTML = aprovadas;
        aprov.appendChild(h1Aprovadas);

        var ctx = document.getElementsByClassName("line-chart2");

        var chartGraph = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Debito", "Credito"],
                datasets: [{
                    label: "valores em R$",
                    data: [debito, credito],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        font: {
                            size: 12,
                        },
                        text: "RELAÇÃO ENTRE DÉBITO E CRÉDITO NO EVENTO"
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        var ctx = document.getElementsByClassName("line-chart3");

        var id = data.map((item) => item.id);

        var amount = data.map((item) => item.amount);

        var chartGraph = new Chart(ctx, {
            type: 'line', 
            data: {
                labels: id,
                datasets: [
                    {
                        label: "Valor da transação",
                        data: amount,
                        borderWidht: 6,
                        borderColor: 'rgba(77,166,253,0.85)',
                        backgroundColor: 'transparent',
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        font: {
                            size: 12,
                        },
                        text: "HISTÓRICO DE TRANSAÇÕES"
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    })







