import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
