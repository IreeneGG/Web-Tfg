'use client'
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CardHumedad = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !data) return;

    // Extraer las fechas y la humedad del arreglo de datos
    const labels = data.map(entry => entry.fecha);
    const humidityData = data.map(entry => entry.humedad);

    // Configurar el gráfico
    const chartConfig = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Humedad",
            data: humidityData,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    };

    // Crear el gráfico
    const myChart = new Chart(chartRef.current, chartConfig);

    // Limpiar el gráfico al desmontar el componente
    return () => myChart.destroy();
  }, [data]);

  return (
    <div className="card">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CardHumedad;
