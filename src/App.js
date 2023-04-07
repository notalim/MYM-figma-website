import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";


function App() {
    return (
        <div className="App">
            <Sidebar />
            <LeftSection />
            <RightSection />
        </div>
    );
}

export default App;
