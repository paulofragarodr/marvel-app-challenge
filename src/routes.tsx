import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Details from './pages/details'

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
    )
}

export default MainRoutes;