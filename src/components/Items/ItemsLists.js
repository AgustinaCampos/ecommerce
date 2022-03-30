import React,{useState, useEffect} from 'react'
import Card from './Card.js'
import './Items.css'

const ListItems = () => {
    const ArrayProducts =[
        {
            title: "Damasque",
            id: 1,
            price: 8800,
            image: 'Candle-Damasque.jpg',
            stock: 3,
        },
        {
            title: "LES",
            id: 2,
            price: 8000, 
            image:'Candle-LES.jpg',
            stock: 7,
        },
        {
            title: "Rosalita",
            id: 3,
            price: 8800,
            image:'Candle-Rosalita.jpg',
            stock: 11,
        }
    ]

    const [items, setItems] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(ArrayProducts)
        })
    }

    useEffect( () => {
        getProducts().then(products => {
            setTimeout(() => {
                setItems(products)
            }, 2000)
        }).finally(() => {
            console.log("Productos cargados")
        })
    }, [])

    if (!items.length){
        return (
            <div className="list-items">
                Obteniendo items
            </div>    
        )
    }

    return (
        <div className="list-items">
            {items.map(item => (
                <Card data={item} key={item.id} />
            ))}
        </div>
    )
}

export default ListItems;