import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Items.css'

const Card = ({ data }) => {
    const { price, title, image, stock } = data;

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
            <img src={`./${image}`} alt={image} className="product-image" />
            <p> Precio: ${price}</p>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={addItem}><i class="bi bi-plus-lg"></i></Button>
                <Button>{itemsToBuy}</Button>
                <Button onClick={removeItem}><i class="bi bi-dash-lg"></i></Button>
            </ButtonGroup>
        </div>
    )
}

export default Card;