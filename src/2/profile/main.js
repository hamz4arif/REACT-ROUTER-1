import Profile from './profile'
import Order from './order'
import Logout from './logout'
import SideBar from './sideBar'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
const Main=()=>{
    let {path}=useRouteMatch;
    return(
        <div>
            <SideBar/>
            <hr/>
            <Switch>
                <Route path={`${path}/profile`}><Profile/></Route>
            </Switch>
        </div>
    )
}
export default Main