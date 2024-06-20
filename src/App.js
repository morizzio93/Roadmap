import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Copyright from "./Copyright";
import Login from "./Login";
import Features from "./Features";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router basename={"roadmap"}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route
              path="/features"
              element={
                <PrivateRoute>
                  <Features />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </AuthProvider>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default App;
