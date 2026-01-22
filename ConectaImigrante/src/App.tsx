import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import User from "./pages/User.tsx";
import Prefeitura from "./pages/Prefeitura.tsx";
import Empresa from "./pages/Empresa.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// MOCK: Simulando o estado do usuário (isso virá do Google Login depois)
// Troque o 'role' para testar os acessos: 'admin', 'prefeitura', 'empresa' ou 'user'
const user = {
  isLogged: true,
  role: "admin",
};

// Componente de Proteção de Rota
const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  if (!user.isLogged) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* --- ROTAS PÚBLICAS --- */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />

        {/* --- ÁREA DO USUÁRIO IMIGRANTE --- */}
        <Route
          path="/user"
          element={
            <ProtectedRoute
              allowedRoles={["user", "admin"]}
              children={<User />}
            ></ProtectedRoute>
          }
        />

        {/* --- ÁREA DA PREFEITURA --- */}
        <Route
          path="/prefeitura"
          element={
            <ProtectedRoute
              allowedRoles={["prefeitura", "admin"]}
              children={<Prefeitura />}
            ></ProtectedRoute>
          }
        />

        {/* --- ÁREA DA EMPRESA --- */}
        <Route
          path="/empresa"
          element={
            <ProtectedRoute
              allowedRoles={["empresa", "admin"]}
              children={<Empresa />}
            ></ProtectedRoute>
          }
        />

        {/* --- ÁREA DO ADMIN (JMK'S DEV) --- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              allowedRoles={["admin"]}
              children={<Admin />}
            ></ProtectedRoute>
          }
        />

        {/* ROTA 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
