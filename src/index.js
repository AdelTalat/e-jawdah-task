import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookCommercialName from "./pages/BookCommercialName/BookCommercialName";
import Wrapper from "./components/Wrapper/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="BookCommercialName" element={<BookCommercialName />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
);
