import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Layout from "./global-components/Layout";
import Context from "./utils/Context";
import Routes from "./utils/Routes";

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Routes />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Context>
    );
};

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
