import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PrincBtn from "../PrincBtn";

const SimulatorForm = () => {
  return (
    <Container className=" py-5 d-flex align-items-center justify-content-center vh-100">
      <StyledWrapper>
          <div className="d-flex justify-content-end ">
            <Link to="/">
              <i class="bi bi-x-square"></i>
            </Link>
          </div>
        <div className="login wrap">
          
          <h1 className="h1">
            MoroScan <i class="bi bi-leaf-fill"></i>
          </h1>
          <input placeholder="Parcelas" id="1" name="p" type="text" />
          <input placeholder="Metros Cuadrados" id="2" name="m2" type="text" />
          <div>
            <input value="Simular" className="btn" type="submit" />
          </div>
        </div>
      </StyledWrapper>
    </Container>
  );
};

const StyledWrapper = styled.div`
  .login {
    width: 450px;
    height: 400px;
    background: #486832;
    padding: 47px;
    color: #fff;
    border-radius: 10px;
    padding-bottom: 50px;
    font-size: 1.3em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    box-shadow: 10px 10px 19px -2px rgba(23, 29, 18, 0.75);
    -webkit-box-shadow: 10px 10px 19px -2px rgba(23, 29, 18, 0.75);
    -moz-box-shadow: 10px 10px 19px -2px rgba(23, 29, 18, 0.75);
  }

  .login input[type="text"] {
    opacity: 1;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    padding: 13px 18px;
    margin: 20px 0 0 0;
    font-size: 0.8em;
    border-radius: 100px;
    background: #ffff;
    color: #171d12;
  }

  .login input:focus {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type="submit"],
  .login input[type="button"],
  .h1 {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 13px;
    margin: 40px 0 0 0;
    border-radius: 500px;
    font-weight: 600;
    animation: bounce2 1.6s;
  }

  .h1 {
    padding: 0;
    position: relative;
    top: -35px;
    display: block;
    margin-bottom: -0px;
    text-align: center;
  }

  .btn {
    background: #171d12;
    box-shadow: 7px 7px 10px -3px rgba(23, 29, 18, 0.75);
    -webkit-box-shadow: 7px 7px 10px -3px rgba(23, 29, 18, 0.75);
    -moz-box-shadow: 7px 7px 10px -3px rgba(23, 29, 18, 0.75);
    color: #fff;
    padding: 16px !important;
  }

  .btn:hover {
    background: #537d3d;
    color: rgb(255, 255, 255);
    padding: 16px !important;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .login input[name="p"] {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[name="m2"] {
    animation: bounce1 1.3s;
  }

  @media only screen and (max-width: 600px) {
    .login {
      width: 70%;
      padding: 3em;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-250px);
      opacity: 0;
    }
  }

  @keyframes bounce1 {
    0% {
      opacity: 0;
    }

    40% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  @keyframes bounce2 {
    0% {
      opacity: 0;
    }

    70% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
`;

export default SimulatorForm;
