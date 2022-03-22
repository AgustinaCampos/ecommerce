import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h2 className='title'> Productos seleccionados</h2>
      <Card title={"Remera"} size={"XL"} price={200} />
      <Card title={"Pantalon"} size={"S"} price={1000}/>
      <Card title={"Tapado"} size={"L"} price={35000}/>
      <Card title={"Sweateer"} size={"XL"} price={1390}/>
    </div>
  );
}

export default App;
