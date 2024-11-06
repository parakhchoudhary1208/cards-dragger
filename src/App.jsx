import React from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {

    return (
        <div className="relative w-100 h-screen bg-zinc-800">
            <Background/>
            <Foreground/>
        </div>
    )
}

export default App;
