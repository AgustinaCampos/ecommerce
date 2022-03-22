
const Card = ({ title, price, size }) => {
    return(
        
        <div className="card">
            <h2>{title}</h2>
            <p> Precio: ${price}</p>
            <p>Talle: {size}</p>
            <button>Comprar</button>
        </div>
    )
}

export default Card;