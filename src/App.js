import './App.css';
import Main from './components/Main'
import Header from './components/header/Header';
import HelpBar from './components/home/HelpBar/HelpBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PDP from './components/PDP/PDP';

function App() {
  return (
  <>
  <Router>
    <Header />
    <HelpBar />    
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route path='/productos/:id' element={<PDP />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
