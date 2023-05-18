import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto='Esteban' />
    </>
  );
}

export default App;
