import React from "react";
import { Route } from "react-router-dom";
import SplashScreen from "../../pages/SplashScreen";
import Test from "../../pages/Test";
import Value from "../../pages/Value";

const App: React.FC = () => (
  <>
    <Route path="/" component={SplashScreen} exact />
    <Route path="/value" component={Value} />
    <Route path="/test" component={Test} />
  </>
);

export default App;
