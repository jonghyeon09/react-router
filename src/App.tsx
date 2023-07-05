import Router from "./components/Router";
import Root from "./pages/Root";
import Route from "./components/Route";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Router>
    </>
  );
}

export default App;
