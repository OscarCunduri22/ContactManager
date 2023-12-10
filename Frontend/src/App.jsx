import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-contact" element={<h1>Hellopepe</h1>} />
        <Route path="/contact/:id" element={<h1>Hellopepe</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
