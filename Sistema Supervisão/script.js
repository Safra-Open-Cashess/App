var ctx = document.getElementsByClassName("line-chart2");

var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Cerveja", "Gin", "Vodca", "Refrigerante", "Agua", "Chopp"],
        datasets: [{
            label: "Em %",
            data: [20, 10, 15, 25, 20, 10],
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
                text: "BEBIDAS MAIS CONSUMIDAS POR EVENTO"
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

var chartGraph = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Número de pulseiras",
                data: [15000, 15165, 16458, 14450, 15452, 13250, 12457, 10124, 15258, 10258, 15258, 16258],
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
                text: "NÚMERO DE PULSEIRAS ATIVADAS POR MÊS - 2021"
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});