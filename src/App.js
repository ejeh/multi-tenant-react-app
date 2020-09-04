import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import history from "./history";
import rootReducer from "./reducers";
import indexRoutes from "./routes";
import { composeWithDevTools } from "redux-devtools-extension";
// import "bootstrap/dist/css/bootstrap.min.css";

const middleWare = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            console.log(prop);
            const { path, exact, Component } = prop;
            return (
              <Route
                path={path}
                exact={exact}
                key={key}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
