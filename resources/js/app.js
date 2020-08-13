import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./global-components/Layout";
import Routes from "./utils/Routes";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Routes />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
