import {useParams} from 'react-router-dom'
import api from '../api/productsapi'
const Details=()=>{
    let {id}=useParams();
    const prod=api.getProductsById(id);
   
    return(
        <div>
            <h1>Details of Product {prod.id}</h1>
            <h3>ID:{prod.id}</h3>
            <h3>Name:{prod.name}</h3>
            <h3>Price: Rs.{prod.price}</h3>
        </div>
    )
}
export default Details