import "./App.css";
import { Route, Routes } from "react-router";
import ScrollToTop from "./Components/ScrollToTop";
import Welcome from "./Pages/Onboarding/Welcome";
import Signin from "./Pages/Signin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<><ScrollToTop /><Welcome /></>} />
        <Route path="/signin" element={<><ScrollToTop /><Signin /></>} />
      </Routes>
    </div>
  );
}

export default App;