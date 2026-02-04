import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação das páginas
// Módulo Cliente
import CadastroUsuario from './pages/CadastroUsuario';
import HomeCardapio from './pages/HomeCardapio';
import PersonalizacaoPizza from './pages/PersonalizacaoPizza';
import FinalizacaoPedido from './pages/FinalizacaoPedido';
import AcompanhamentoPedido from './pages/AcompanhamentoPedido';
import MeusPedidos from './pages/MeusPedidos';
import Perfil from './pages/Perfil';
import Fidelidade from './pages/Fidelidade';
import Notificacoes from './pages/Notificacoes';
import LandingPage from './pages/LandingPage';

// Módulo Administrativo
import LancamentoPedidos from './pages/admin/LancamentoPedidos';
import ConfiguracoesGerais from './pages/admin/ConfiguracoesGerais';
import ConfiguracoesPagamento from './pages/admin/ConfiguracoesPagamento';
import ConfiguracoesFidelidade from './pages/admin/ConfiguracoesFidelidade';
import ConfiguracaoHardware from './pages/admin/ConfiguracaoHardware';
import GestaoEntregadores from './pages/admin/GestaoEntregadores';
import DashboardDesempenho from './pages/admin/DashboardDesempenho';
import GestaoCampanhas from './pages/admin/GestaoCampanhas';
import GestaoCupons from './pages/admin/GestaoCupons';
import AcertoFinanceiro from './pages/admin/AcertoFinanceiro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroUsuario />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/home" element={<HomeCardapio />} />
        <Route path="/personalizar-pizza" element={<PersonalizacaoPizza />} />
        <Route path="/finalizar-pedido" element={<FinalizacaoPedido />} />
        <Route path="/acompanhamento" element={<AcompanhamentoPedido />} />
        <Route path="/pedidos" element={<MeusPedidos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/fidelidade" element={<Fidelidade />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/lp" element={<LandingPage />} />

        {/* Módulo Administrativo */}
        <Route path="/admin/lancamento" element={<LancamentoPedidos />} />
        <Route path="/admin/configuracoes" element={<ConfiguracoesGerais />} />
        <Route path="/admin/pagamento" element={<ConfiguracoesPagamento />} />
        <Route path="/admin/fidelidade" element={<ConfiguracoesFidelidade />} />
        <Route path="/admin/hardware" element={<ConfiguracaoHardware />} />
        <Route path="/admin/entregadores" element={<GestaoEntregadores />} />
        <Route path="/admin/dashboard" element={<DashboardDesempenho />} />
        <Route path="/admin/campanhas" element={<GestaoCampanhas />} />
        <Route path="/admin/cupons" element={<GestaoCupons />} />
        <Route path="/admin/acerto" element={<AcertoFinanceiro />} />

        {/* As rotas serão adicionadas conforme as telas forem implementadas */}
      </Routes>
    </Router>
  );
}

export default App;
