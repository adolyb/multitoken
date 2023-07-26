import React from "react";
import './app.css'
import WrappedRouters from "./routes/WrappedRouters.jsx";

const App = () =>{
    return(
        <div className="App">
            <WrappedRouters></WrappedRouters>
        </div>
    )
}

export default App;