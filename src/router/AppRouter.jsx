import React from "react";
import { Route, Routes } from "react-router-dom";
import SimulatorForm from "../components/pages/SimulatorForm";
import Simulation from "../components/pages/Simulation";
import Index from "../components/pages/Index";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/simulator" element={<SimulatorForm></SimulatorForm>}></Route>
      <Route exact path="/simulation" element={<Simulation></Simulation>}></Route>
      <Route index exact path="/" element={<Index></Index>}></Route>
    </Routes>
  );
};

export default AppRouter;
