import "./styles.css";
import { useEffect } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./api/serverRequest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
