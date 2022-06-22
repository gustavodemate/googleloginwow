import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { PriveteRoutes } from './private.routes';



//definindo as rotas.
export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}  /> 
                <Route path="/home" element={<Home/>} />                     
            </Routes>
        </BrowserRouter>
    )
  
  }