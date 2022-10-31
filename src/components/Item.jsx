/* import './css/item.css' */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams} from 'react-router-dom';

const Item = ({info}) => {
    
    
    return (
        
        <Link to={`/store/detalle/${info.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={info.picUrl} />
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>
                        {info.description}
                    </Card.Text>
                    <Button variant="primary">Ver</Button>
                </Card.Body>
            </Card>
        </Link>
        
    )
}

export default Item