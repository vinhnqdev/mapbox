import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/UI/ErrorFallback";

function App() {
  return (
    <div className="h-auto bg-main-bg">
      <BrowserRouter>
        <Switch>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
