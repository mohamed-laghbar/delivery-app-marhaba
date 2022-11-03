import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (


    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="" element={<Index />} />
      </Routes>
    </BrowserRouter>


 );
}

export default App;