import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Slack from "./components/Slack";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <div className="d-flex flex-column h-100">

            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<Slack/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;
