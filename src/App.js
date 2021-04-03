/* eslint-disable react/jsx-pascal-case */
import '../src/styles/App.scss';
import Cancel_use from './components/Cancel-use';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="contenedor">
    <Header />
    <Sidebar />
    <Cancel_use />
    </div>
  );
}

export default App;
