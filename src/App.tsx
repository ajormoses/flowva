// import { PrimeReactProvider } from "primereact/api";
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "./assets/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";
import AuthSignIn from "./pages/auth/signIn";
import AuthSignUp from "./pages/auth/signUp";
import Dashboard from "./pages/dashboard";

// import AuthCreateAccount from "./pages/auth/CreateAccount";
// import Preview from "./pages/preview";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/auth/signin" element={<AuthSignIn />} />
          <Route path="/auth/signup" element={<AuthSignUp />} />
          {/* <Route path="/public-preview/:id" element={<Preview />} /> */}

          {/* Protected route */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* <Route
          path="/preview/:id"
          element={
            <PrivateRoute>
              <Preview />
            </PrivateRoute>
          }
        /> */}

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/auth/signin" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
