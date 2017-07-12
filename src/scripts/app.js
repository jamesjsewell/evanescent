import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter, Route, Link } from "react-router-dom"
import thunk from "redux-thunk"
import RouteConfig from "./components/appComponent.js"
import reducers from "./reducers/index.js"
import ReactGA from "react-ga"
import { AUTH_USER } from "./actions/types"
import { protectedTest } from "./actions/authActions.js"
// import setVars from "../../setEnvironmentVars.js"

// setVars()

// Initialize Google Analytics
ReactGA.initialize("UA-000000-01")

function logPageView() {
    ReactGA.pageview(window.location.pathname)
}

const middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware)

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <RouteConfig />
        </BrowserRouter>
    </Provider>,
    document.querySelector(".wrapper")
)
