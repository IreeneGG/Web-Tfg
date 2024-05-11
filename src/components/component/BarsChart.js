"use client"
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Bars({ datosAmbiente }) {
    // Función para estructurar los datos
    function formatData(data) {
        const labels = data.map(item => item.fecha); // Obtener las fechas
        const temperaturas = data.map(item => item.temperatura_media); // Obtener las temperaturas
        const humedades = data.map(item => item.humedad_media); // Obtener las humedades

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Temperatura Media',
                    data: temperaturas,
                    backgroundColor: 'rgb(255, 159, 64, 0.8)' // Color para temperatura
                },
                {
                    label: 'Humedad Media',
                    data: humedades,
                    backgroundColor: 'rgba(0, 220, 195, 0.8)' // Color para humedad
                }
            ]
        };
    }

    const data = formatData(datosAmbiente); // Formatear los datos

    const options = {
        responsive: true,
        animation: false,
        scales: {
            y: {
                min: 0,
                max: 100
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)' }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Temperatura y Humedad Ambiente',
                color: 'rgb(200, 200, 200)',
                font: {
                    size: 18,
                    weight: 'bold'
                }
            },legend: {
                display: false // Oculta la leyenda
            }
        }
    };

    return <Bar data={data} options={options} />;
}
