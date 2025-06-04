import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Correct import
import WelcomeScreen from "./components/WelcomeScreen";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<AccountSettings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
