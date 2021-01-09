import { Button } from "bootstrap"
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <div>
           <nav>
               <ul>
                   <li>
                       <Link to="/">HOME</Link>
                   </li>
                   <li>
                       <Link to="/about">About</Link>
                   </li>
                   <li>
                       <Link to="/products">products</Link>
                   </li>
               </ul>
           </nav>
        </div>
    )

}
export default  Header