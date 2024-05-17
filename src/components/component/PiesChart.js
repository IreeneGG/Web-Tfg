"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pies({ datos1 }) {
    // Estructurar los datos recibidos para que se ajusten al formato del gráfico
    console.log("PIES DATOS2:", datos1);
    
    // Calcular el porcentaje de humedad media y el porcentaje restante
    const humedadPorcentaje = Math.round(datos1.humedad * 100);
    const otrosPorcentaje = 100 - humedadPorcentaje;

    const data = {
        labels: ['Humedad Media', 'Seco'], // Etiquetas para la humedad y los otros datos
        datasets: [
            {
                label: 'Última Tupla',
                data: [humedadPorcentaje, otrosPorcentaje],
                backgroundColor: [
                    
                    'rgba(0, 220, 195, 0.4)', // Color para otros humedad
                    'rgba(247, 148, 0, 0.4)', // Color para la seco
                ],
                borderColor: [
                    
                    'rgba(0, 220, 195, 1)', // Color para el borde de humedad
                    'rgba(247, 148, 0, 1)', // Color para el borde de la seco
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
              display: true,
              text: 'Porcentaje de agua en tierra', // Título de la gráfica
              color: 'rgb(200, 200, 200)',
              font: {
                  size: 16, // Tamaño de la fuente del título
              },
          },
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    const label = data.labels[tooltipItem.index];
                    const value = data.datasets[0].data[tooltipItem.index];
                    return `${label}: ${value}%`;
                }
            }
        }
        
    };

    return <Pie data={data} options={options} />;
}
