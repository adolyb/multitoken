import React from "react";
import './App.css'
import WrappedRouters from "./routes/WrappedRouters.jsx";

const App = () =>{
    return(
        <div className="App">
            <WrappedRouters></WrappedRouters>
        </div>
    )
}

export default App;