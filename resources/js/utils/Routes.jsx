// Components==============
import React from "react";
import { Route } from "react-router-dom";
import About from "../pages/About";
import Index from "../pages/Index";
// =========================

export default function Routes() {
    return (
        <>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
        </>
    );
}
