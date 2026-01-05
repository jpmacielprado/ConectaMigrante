import Home from "./pages/Home.jsx";
import Button from "./components/Button";
import { openWhatsApp } from "./utils/whatsapp";
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
const ProtectedRoute = ({ children, allowedRoles }) => {
  if (!user.isLogged) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* --- ROTAS PÚBLICAS --- */}
        <Route
          path="/login"
          element={
            <div className="flex h-screen items-center justify-center bg-gray-100">
              <h1 className="text-2xl font-bold">
                Tela de Login Google (JMK's Dev)
              </h1>
            </div>
          }
        />

        <Route path="/" element={<Home />} />

        {/* --- ÁREA DO USUÁRIO IMIGRANTE --- */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <div className="p-8 bg-black-50 h-screen">
                <h1 className="text-2xl font-bold text-white-900">
                  Meus Dados e Documentação
                </h1>
                <p>Informações pessoais e documentos do imigrante.</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* --- ÁREA DA PREFEITURA --- */}
        <Route
          path="/prefeitura"
          element={
            <ProtectedRoute allowedRoles={["prefeitura", "admin"]}>
              <div className="p-8 bg-blue-50 h-screen">
                <h1 className="text-2xl font-bold text-blue-900">
                  Dashboard Prefeitura
                </h1>
                <p>Insights e dados estatísticos do ConnectaImigrante.</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* --- ÁREA DA EMPRESA --- */}
        <Route
          path="/empresa"
          element={
            <ProtectedRoute allowedRoles={["empresa", "admin"]}>
              <div className="p-8 bg-green-50 h-screen">
                <h1 className="text-2xl font-bold text-green-900">
                  Painel da Empresa
                </h1>
                <p>Gerencie seus horários e serviços aqui.</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* --- ÁREA DO ADMIN (JMK'S DEV) --- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <div className="p-8 bg-red-50 h-screen">
                <h1 className="text-2xl font-bold text-red-900">
                  Painel do Administrador
                </h1>
                <p>Gestão total do sistema.</p>
              </div>
            </ProtectedRoute>
          }
        />

        {/* ROTA 404 */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center">Página não encontrada!</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
