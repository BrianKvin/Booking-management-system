import Router from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router />
      <ToastContainer theme="colored" />
    </AuthProvider>
  );
}

export default App;
