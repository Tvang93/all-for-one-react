import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./components/HelloWorldComponent.jsx";
import GreaterThanLessThanComponent from "./components/GreaterThanLessThanComponent.jsx";
import Navbar1Component from "./components/Navbar1Component.jsx";
import Add2NumbersComponent from "./components/Add2NumbersComponent.jsx";
import AskingQuestionsComponent from "./components/AskingQuestionsComponent.jsx";
import MadLibComponent from "./components/MadLibComponent.jsx";
import Magic8BallComponent from "./components/Magic8BallComponent.jsx";
import OddOrEvenComponent from "./components/OddOrEvenComponent.jsx";
import RestaurantPickerComponent from "./components/RestaurantPickerComponent.jsx";
import ReverseItAlphaNumComponent from "./components/ReverseItAlphaNumComponent.jsx";
import ReverseItNumOnlyComponent from "./components/ReverseItNumOnlyComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar1Component />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/HelloWorld" element={<HelloWorldComponent />} />
        <Route path="/Add2Numbers" element={<Add2NumbersComponent />} />
        <Route path="/AskingQuestions" element={<AskingQuestionsComponent />} />
        <Route path="/MadLib" element={<MadLibComponent />} />
        <Route path="/Magic8Ball" element={<Magic8BallComponent />} />
        <Route path="/OddOrEven" element={<OddOrEvenComponent />} />
        <Route path="/RestaurantPicker" element={<RestaurantPickerComponent />} />
        <Route path="/ReverseItAlphanumerical" element={<ReverseItAlphaNumComponent />} />
        <Route path="/ReverseItNumbersOnly" element={<ReverseItNumOnlyComponent />} />
        <Route path="/GreaterThanLessThan" element={<GreaterThanLessThanComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
