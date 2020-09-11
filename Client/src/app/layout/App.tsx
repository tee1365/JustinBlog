import React from "react";
import { Route } from "react-router-dom";
import Value from "../../feature/Value";
import Test from "../../feature/Test";
import SplashScreen from "../../feature/SplashScreen";

const App: React.FC = () => (
  <>
    <Route path="/" component={SplashScreen} exact />
    <Route path="/value" component={Value} />
    <Route path="/test" component={Test} />
  </>
);

export default App;
