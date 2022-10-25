import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import TrForm from "./components/transactions/trform";
import HomePage from "./components/homepage/homepage";
import Trlist from "./components/transactions/trlist";
import Formcontainer from "./components/transactions/trform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/trlist" element={<Trlist />} />
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
