import React from "react";
import { Route } from "react-router-dom";
import CreateMusic from "./components/CreateMusic";

function Routes() {
    return(
            <Routes>
            <Route path="/create-music" component={CreateMusic}/>
            </Routes>
    );
}

export default Routes;