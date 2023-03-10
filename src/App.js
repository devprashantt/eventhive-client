import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin, Signup, Home } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
