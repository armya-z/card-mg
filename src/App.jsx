import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import TrForm from "./components/transactions/trform";
import HomePage from "./components/homepage/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/transactions"
          element={<transactions />}
        />
        <Route exact path="/trform" element={<TrForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
