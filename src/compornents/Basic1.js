import React, {useState} from 'react'

const Basic1 = () => {
    

    const [count, setCount] = useState(0)
    const [product, setProducts] = useState({name: '', price: ''})
    return (
        <div>
            <button onClick={() => {setCount(prevCount => prevCount+1); setCount(prevCount => prevCount+1);} }>Count {count}</button>
            <form>
                <input type="text" value={product.name} onChange={evt => setProducts({...product, name: evt.target.value})}/>
                <input type="text" value={product.price} onChange={evt => setProducts({...product, price: evt.target.value})}/>
            </form>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default Basic1;
