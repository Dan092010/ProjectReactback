import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Alta from './pages/alta'
import Contacto from './pages/contacto'
import Nosotros from './pages/nosotros'
import Home from './pages/home'

function App() {
  return (
        <div>
          <header className="main-header">
            <Router>
              <Navbar/>

              <Routes>
                <Route path='/' element={<Home />} exact/>
                <Route path='home' element={<Home />} />
                <Route path='alta' element={<Alta />}/>
                <Route path='contacto' element={<Contacto />}/>
                <Route path='nosotros' element={<Nosotros />}/>
              </Routes>
            </Router>

          </header>
      </div>
    
  );
}

export default App;
