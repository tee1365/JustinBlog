import React from "react";
import { Route } from "react-router-dom";
import Value from "../../feature/Value";
import Test from "../../feature/Test";
import Homepage from "../../feature/Homepage";

const App: React.FC = () => (
  <>
    <Route path="/" component={Homepage} exact />
    <Route path="/value" component={Value} />
    <Route path="/test" component={Test} />
  </>
);

export default App;
