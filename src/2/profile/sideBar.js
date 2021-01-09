import { Link,useRouteMatch } from "react-router-dom"

const sideBar=()=>{
    let {url} =useRouteMatch
    return(
        <div>
            <ul>
                <li><Link to={`${url}/profile`}>Profile</Link></li>
                <li><Link to={`${url}/order`}>Order</Link></li>
                <li><Link to={`${url}/logout`}>LogOut</Link></li>
            </ul>
        </div>
    )
}
export default sideBar;