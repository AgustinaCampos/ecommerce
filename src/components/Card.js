import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Card = ({ title, price, size, stock }) => {
    const [itemsToBuy, setItemsToBuy] = useState(0);

    const addItem = () => {
        if(itemsToBuy < stock){
            setItemsToBuy(itemsToBuy+1)
        }
    }

    const removeItem = () => {
        if (itemsToBuy >= 1){
            setItemsToBuy(itemsToBuy-1)
        }
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            <p> Precio: ${price}</p>
            <p>Talle: {size}</p>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={addItem}><i class="bi bi-plus-lg"></i></Button>
                <Button>{itemsToBuy}</Button>
                <Button onClick={removeItem}><i class="bi bi-dash-lg"></i></Button>
            </ButtonGroup>
        </div>
    )
}

export default Card;