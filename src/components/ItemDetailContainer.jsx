import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

/* const productos = [
    { id: 1, cat: "guitarras", title: "Guitarra Fender", description: "la mejor viola del mercado.", price: "5000", picUrl: "https://picsum.photos/600/400" },
    { id: 2, cat: "viento", title: "Trompeta Elephant", description: "The best of the world.", price: "8000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" },
    { id: 3, cat: "percusion", title: "Bateria Boom", description: "Sin dudas la mejor.", price: "10000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" },
]; */

const ItemDetailContainer = ({productos}) => {

    const [data, setData] = useState({})
    const { prodId } = useParams()

    const [proDet, setProDet] = useState([])
    useEffect(() => {
      setTimeout(()=>{
        setProDet(productos)
        console.log(proDet)

      }, 1000)
    
      
      
    }, [productos])
    

    return (
        <>
            <h2>ItemDetailContainer</h2>
            
            {/* <ItemDetail data={proDet} /> */}
        </>
    )
}

export default ItemDetailContainer