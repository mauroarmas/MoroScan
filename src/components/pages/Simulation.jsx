import React from "react";
import { Container } from "react-bootstrap";
import PrincBtn from "../PrincBtn";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: [
      "Parcelas afectadas perdidas",
      "Parcelas afectadas sin pérdida",
      "Parcelas sin afectar",
    ],
    datasets: [
      {
        data: [12.5, 62.5, 25],
        backgroundColor: ["#ffffff", "#7ed957", "#c1ff72"],
        borderColor: ["#000000"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top", // Cambiar a la izquierda
        labels: {
          color: "#ffffff", // Letras blancas
          boxWidth: 20,
          padding: 20,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <Container className="py-5 d-flex align-items-center justify-content-center">
      <div className="p-4 h-100 d-flex flex-column justify-content-center backgroundCard align-items-center">
        <div className="text-center h-25 d-flex flex-column justify-content-center align-items-center">
          <h1>Resultados de la simulación</h1>
          <p className="my-3">Fecha: 26/04/2025</p>
        </div>

        {/* Contenedor con gráfico y leyenda */}
        <div className="h-100" style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <Pie data={data} options={options} className="w-100" />
          </div>
        </div>

        <div className="text-center my-4">
          <p>Producción Total real: 100 Tn</p>
          <p>Parcelas Afectadas: 400</p>
          <p>Pérdida Global (%): 12.5%</p>
        </div>

        <div className="ms-auto">
          <Link to="/">
            <PrincBtn text="Volver" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Index;
