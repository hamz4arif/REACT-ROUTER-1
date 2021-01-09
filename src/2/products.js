import { Link } from 'react-router-dom'
import Dataproducts from '../data/dataproducts'
const Products = () => {
    return (
        <div>
            <ul>
                {Dataproducts.map(p =>
                    <h1>
                        <Link to={`/products/${p.id}`}>{p.name}</Link>
                    </h1>
                )}
            </ul>
        </div>

    )
}
export default Products;