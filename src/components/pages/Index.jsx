import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Index = () => {
  return (
    <Container className="text-center py-5 d-flex align-items-center justify-content-center vh-100">
      <Card className="p-4 h-100 d-flex flex-column justify-content-between backgroundCard">
        <div className="h-25">
          <h1>MoroScan 🐛</h1>
          <p>
            Anticipa el riesgo, cuidá tu cosecha: visualiza el efecto del “bicho
            moro” en el tabaco.
          </p>
        </div>
        <div className="h-75">
          <div>
            <p>Si desea iniciar una nueva simulación pulse el botón iniciar</p>
            <p>Si desea ver el historial de simulaciones pulse el botón historial</p>
            <Button variant="dark" className="m-2">
              Iniciar
            </Button>
            <Button variant="secondary" className="m-2">
              Historial
            </Button>
          </div>
          <div>
            <p>imagenes</p>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Index;
