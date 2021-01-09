// import api from '../api/productsapi'
import Dataproducts from '../data/dataproducts'
const products=()=>{
    return(
        <div>
            <ul>
                {Dataproducts.map(p=><li key={p.id}><h1>{p.name}</h1></li>)}
            </ul>
        </div>
    )

}
export default  products;