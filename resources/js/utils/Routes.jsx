// Components==============
import React from "react";
import { Route } from "react-router-dom";
import Add from "../pages/Add";
import Index from "../pages/Index";
import Overview from "../pages/Overview";
import Write from "../pages/Write";
// =========================

export default function Routes() {
    return (
        <>
            <Route exact path="/" component={Index} />
            <Route path="/overview" component={Overview} />
            <Route path="/write" component={Write} />
            <Route path="/add" component={Add} />
        </>
    );
}
