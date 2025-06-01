// Proyecto de React con React-Bootstrap y react-router-dom + react-chartjs-2
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <Card className="p-4">
        <h1>MoroScan 🐛</h1>
        <p>Anticipa el riesgo, cuidá tu cosecha: visualiza el efecto del “bicho moro” en el tabaco.</p>
        <img
          src="/mnt/data/a890b063-c083-44a2-bb12-752a13e5f3b5.png"
          alt="Cultivo"
          className="img-fluid my-3"
        />
        <Button variant="dark" className="m-2" onClick={() => navigate('/simulacion')}>
          Iniciar
        </Button>
        <Button variant="secondary" className="m-2" disabled>
          Historial
        </Button>
      </Card>
    </Container>
  );
}

function Simulacion({ setSimulacion }) {
  const [parcelas, setParcelas] = useState('');
  const navigate = useNavigate();

  const handleSimular = () => {
    const parcelasNum = parseInt(parcelas);
    if (!isNaN(parcelasNum) && parcelasNum > 0) {
      setSimulacion({
        fecha: '26/04/2025',
        total: 100,
        afectadas: parcelasNum,
        perdida: 12.5
      });
      navigate('/resultados');
    } else {
      alert('Ingrese un número válido');
    }
  };

  return (
    <Container className="text-center py-5">
      <Card className="p-4">
        <h2>MoroScan 🐛</h2>
        <Form>
          <Form.Group controlId="parcelas">
            <Form.Label>Parcelas de Terreno</Form.Label>
            <Form.Control
              type="number"
              value={parcelas}
              onChange={(e) => setParcelas(e.target.value)}
              placeholder="Ingrese solo números"
            />
          </Form.Group>
          <Button variant="dark" className="m-2" onClick={handleSimular}>
            Simular
          </Button>
          <Button variant="secondary" className="m-2" onClick={() => navigate('/')}>Volver</Button>
        </Form>
      </Card>
    </Container>
  );
}

function Resultados({ simulacion }) {
  const navigate = useNavigate();

  const data = {
    labels: ['Parcelas afectadas perdidas', 'Parcelas afectadas sin pérdida', 'Parcelas sin afectar'],
    datasets: [
      {
        data: [12.5, 62.5, 25],
        backgroundColor: ['#ffffff', '#b9fbc0', '#72efdd'],
        borderColor: ['#000000'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className="text-center py-5">
      <Card className="p-4">
        <h2>Resultados de la Simulación</h2>
        <p>Fecha: {simulacion.fecha}</p>
        <div className="my-3">
          <Pie data={data} />
        </div>
        <p>Producción Total real: {simulacion.total} Tn</p>
        <p>Parcelas Afectadas: {simulacion.afectadas}</p>
        <p>Pérdida Global (%): {simulacion.perdida}%</p>
        <Button variant="secondary" onClick={() => navigate('/')}>Volver</Button>
      </Card>
    </Container>
  );
}

function App() {
  const [simulacion, setSimulacion] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulacion" element={<Simulacion setSimulacion={setSimulacion} />} />
        <Route path="/resultados" element={<Resultados simulacion={simulacion} />} />
      </Routes>
    </Router>
  );
}

export default App;
