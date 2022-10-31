import { getDefaultNormalizer } from '@testing-library/react';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';

/* const productos = [
    { id: "0001", cat: "guitarras", title: "Guitarra Fender", description: "la mejor remera del mercado.", price: "5000", picUrl: "https://picsum.photos/600/400?random=1" },
    { id: "0002", cat: "viento", title: "Trompeta Elephant", description: "The best of the world.", price: "8000", picUrl: "https://picsum.photos/600/400?random=2" },
    { id: "0003", cat: "percusion", title: "Bateria Boom", description: "Sin dudas la mejor.", price: "10000", picUrl: "https://picsum.photos/600/400?random=3" },
]; */

const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([])
    const { catId } = useParams()

    useEffect(() => {
        setTimeout(() => {    
            getData()
        }, 3000)
    }, [])

        const URL = "../data/data.json"
        const getData = async () => {
            const data = await fetch(URL)
            const prod = await data.json()
            setProductos(prod)
            console.log("desde getdata: "+prod)
        }
        

    return (
        productos.length 
        ? <div>
            <h2>ItemListContainer</h2>
            <p>Esta es la prop greeting: {props.greeting}</p>
            
            <ItemList data={productos} />
            <hr />
            
        </div>
        : <h2>Cargando...</h2>
    )
}

export default ItemListContainer