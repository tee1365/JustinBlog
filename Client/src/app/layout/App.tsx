import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import SplashScreen from "../../pages/SplashScreen";
import Test from "../../pages/Test";
import Value from "../../pages/Value";
import NotFound from "./NotFound";

const App: React.FC = () => (
  <Switch>
    <Route path="/" component={SplashScreen} exact />
    <Route path="/value" component={Value} />
    <Route path="/test" component={Test} />
    <Route path="/homepage" component={Homepage}></Route>
    <Route path="/notfound" component={NotFound}></Route>
    <Redirect to="/notfound" />
  </Switch>
);

export default App;
