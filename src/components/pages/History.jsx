import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../style/tableStyle.css";
import PrincBtn from "../PrincBtn";

const History = () => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate("/simulation");
  };

  return (
    <Container className="py-5 d-flex align-items-center justify-content-center vh-100">
      <div className="p-4 h-100 d-flex flex-column backgroundCard">
        <div className="text-center h-25 d-flex flex-column justify-content-center align-items-center">
          <h1>
            Historial de Simulaciones <i className="bi bi-leaf-fill"></i>
          </h1>
        </div>

        <div className="h-75 d-flex flex-row justify-content-center align-items-center overflow-wrapper">
          <div className="table-scroll">
            <Table hover bordered responsive className="text-center tabla-historial">
              <thead className="table-dark">
                <tr>
                  <th>Fecha</th>
                  <th>Parcelas de Terreno</th>
                  <th>Parcelas Afectadas</th>
                  <th>Pérdida Global (%)</th>
                  <th>Producción total Real</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20)].map((_, i) => (
                  <tr
                    key={i}
                    className="clickable-row"
                    onClick={handleRowClick}
                  >
                    <td>26/04/2025</td>
                    <td>{1000 + i * 10}</td>
                    <td>{200 + i * 5}</td>
                    <td>{20 + (i % 10)}%</td>
                    <td>{90 + i} Tn</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div className="ms-auto mt-auto">
          <Link to="/">
            <PrincBtn text="Volver" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default History;
