const ctx = document.getElementById('grafico').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'Consumo (kWh/giorno)',
            data: yValues,
            borderColor: '#3498db',
            backgroundColor: 'rgba(52,152,219,0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: '#2980b9'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Consumo energetico vs Minuti di porta aperta',
                font: { size: 18 }
            }
        },
        scales: {
            x: { title: { display: true, text: 'Minuti di porta aperta (x)' } },
            y: { title: { display: true, text: 'Consumo (kWh/giorno)' } }
        }
    }
});