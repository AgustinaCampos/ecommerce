import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <h2 className='title'> Productos seleccionados</h2>
            <div className="list-items">
                <Card title={"Remera"} size={"XL"} price={200} stock={3}/>
                <Card title={"Pantalon"} size={"S"} price={1000} stock={7}/>
                <Card title={"Tapado"} size={"L"} price={35000} stock={11}/>
                <Card title={"Sweater"} size={"XL"} price={1390} stock={1}/>
            </div>
        </div>
    );
}

export default App;
