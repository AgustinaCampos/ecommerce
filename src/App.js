import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListItems from './components/Items/ItemsLists'
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
    return (
        <div >
            <NavBar />
            <h2 className='title'> Productos seleccionados</h2>
            <ListItems />
        </div>
    );
}

export default App;
