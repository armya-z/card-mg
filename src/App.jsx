import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./components/homepage/homepage";
import Formcontainer from "./components/transactions/trform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/trform"
          element={<Formcontainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
