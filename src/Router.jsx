import {BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';



export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}