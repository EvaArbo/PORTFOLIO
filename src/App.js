import './App.css';
import { NavBar } from './components/NavBar'; 
import { Banner } from './components/Banner'; 
import { Skills } from './components/Skills';   // ✅ correct import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />   {/* ✅ uppercase usage */}
    </div>
  );
}

export default App;
