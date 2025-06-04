import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PrincBtn from "../PrincBtn";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Simulation = () => {
  const { idSimulation } = useParams();
  const [simulationData, setSimulationData] = useState([]);

  const fetchSimulationData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/production/" + idSimulation
      );
      console.log("Simulation Data:", response.data);
      setSimulationData(response.data);
    } catch (error) {
      console.error("Error fetching simulation data:", error);
    }
  };

  useEffect(() => {
    fetchSimulationData();
  }, []);

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
        <div className="text-center h-25 d-flex flex-column justify-content-center align-items-center mx-5">
          <h1>Resultados de la simulación</h1>
          <p className="my-3">Fecha: {simulationData.date_simulation}</p>
        </div>

        <div className="d-flex w-100 jutify-content-end">
          <div className="w-auto h-auto">
            <div style={{ width: "380px", height: "380px" }}>
              <Pie data={data} options={options} className="w-100 h-100 " />
            </div>
          </div>

          <div className=" ms-4">
            <h3 className=" mt-2">
              Producción nmro:{" "}
              {simulationData.id_production}{" "}
              <i class="bi bi-leaf-fill"> </i>
            </h3>

            <h4 className="my-4">
              Primavera:{" "}
              {simulationData.spring_type === 1 && (
                <>
                   <span>Tipo 1 🌸</span> 
                </>
              )}
              {simulationData.spring_type === 2 && (
                <>
                  ☀️ <span>Normal</span>
                </>
              )}
              {simulationData.spring_type === 3 && (
                <>
                  🌧️ <span>Tardía</span>
                </>
              )}
            </h4>

            <ul>
              <li>
                Cantidad de parcelas:
                <strong> {simulationData.quantity_plots}</strong>
              </li>
              <li>
                Producción esperada:
                <strong> {simulationData.expected_production}</strong>
              </li>
              <li>
                Perdida en la producción{" "}
                <strong> {simulationData.lost_production} </strong>
              </li>
              <li>
                Producción Real:{" "}
                <strong> {simulationData.real_production}</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Contenedor con gráfico y leyenda */}

        <div className="ms-auto">
          <Link to="/">
            <PrincBtn text="Volver" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Simulation;
