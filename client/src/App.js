import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import InformationForm from "./pages/InformationForm";
import Layout from "./pages/Layout";
import ThankYou from "./pages/ThankYou";
import { customTheme } from "./styles/Theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Navigate replace to="/form" />} />
            <Route path="/form" element={<InformationForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
