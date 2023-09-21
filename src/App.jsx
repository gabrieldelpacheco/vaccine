import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginPage } from './assets/Pages/LoginPage/LoginPage.jsx';
import { HomePage } from './assets/Pages/HomePage/HomePage.jsx';
import { Layout } from './layout/Layout.jsx';
import { PacientePage } from './assets/Pages/CadastroPaciente/CadastroPaciente.jsx';
import {ListaVacinaPage} from './assets/Pages/ListaVacina/ListaVacina.jsx';
import {HistoricoPage} from './assets/Pages/HistoricoPage/Historico.jsx';
import {CadastroVacinaPage} from './assets/Pages/CadastroVacina/CadastroVacina.jsx';
import { CadastroPage } from './assets/Pages/CadastroUsuario/CadastroPage.jsx';


function App() {
  return (

    <Router>
      <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/cadastro' element={<CadastroPage/>}/>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/paciente' element={<PacientePage/>}/>
              <Route path='/listaVacina' element={<ListaVacinaPage/>}/>
              <Route path='/cadastroVacina' element={<CadastroVacinaPage/>}/>
              <Route path='/historicos/:id' element={<HistoricoPage/>}/>
          </Route>
          <Route path='*' element={<><p>Essa página não existe</p></>}/>
       </Routes>
    </Router>
  )
}

export default App
