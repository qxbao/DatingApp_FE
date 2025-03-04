import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DataContext from "./contexts/DataContext";

export default function App() {
    return (
        <DataContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    );
}