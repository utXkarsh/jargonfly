import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RoleSelection from "./pages/RoleSelection";
import JargonPage from "./pages/JargonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/jargon" element={<JargonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
