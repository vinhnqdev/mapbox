import { ChevronUpIcon } from "@heroicons/react/solid";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorFallback from "./components/UI/ErrorFallback";
import { useScroll } from "./context/scroll-context";
import HomePage from "./pages/HomePage";
function App() {
  const { isScrollAtBottom, scrollToTop } = useScroll();

  return (
    <div className="h-auto bg-main-bg">
      {/* Scroll Page */}
      <div
        onClick={scrollToTop}
        className={`fixed cursor-pointer flex justify-center items-center transition duration-300 transform bottom-5 right-5 rounded-md w-12 h-12 bg-modern-gray ${
          isScrollAtBottom
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <ChevronUpIcon className="text-white h-8" />
      </div>
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
