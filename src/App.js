import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
