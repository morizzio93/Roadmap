import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Features from "./Features";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Router basename={"roadmap"}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route
                path="/features"
                element={
                  <PrivateRoute>
                    <Features />
                  </PrivateRoute>
                }
              />
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
