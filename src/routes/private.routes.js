import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/login";
import { Home } from "../pages/home";


//definindo as rotas.
export const PriveteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}  />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
  
  }