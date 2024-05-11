"use client"
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LinesChart({ datos }) {
    // Convertir las fechas en formato 'YYYY-MM-DD' a 'DD-MM'
    const labels = datos.map((row) => {
        const fecha = row.fecha.split('-');
        return `${fecha[2]}-${fecha[1]}`;
    });
    
    // Convertir la humedad de formato decimal a porcentaje
    const humedad = datos.map((row) => Math.round(row.humedad_media * 100));
    
    const midata = {
        labels: labels,
        datasets: [
            {
                label: 'Humedad (%)',
                data: humedad,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 159, 64)', // Naranja
                backgroundColor: 'rgba(255, 159, 64, 0.5)', // Tono de naranja transparente
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 159, 64)',
                pointBackgroundColor: 'rgba(255, 159, 64)',
            },
        ],
    };

    const misoptions = {
        plugins: {
            title: {
                display: true,
                text: 'Humedad del suelo',
                color: 'rgb(200, 200, 200)',
                font: {
                    size: 18,
                    weight: 'bold'
                }
            },
            legend: {
                display: false // Oculta la leyenda
            }
        },
        scales: {
            y: {
                min: 0,
                max: 100, // Establecer el máximo en 100 para porcentaje
            },
            x: {
                ticks: { color: 'rgb(255, 159, 64)' }, // Color de las marcas de los ejes X
            },
        },
    };
    
    return <Line data={midata} options={misoptions} />;
}
