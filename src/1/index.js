import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './about'
import Header from './header'
import HeaderBs from './headerbs'
import Home from './home'
import PageNotFound from './pageNotFound'
import Products from './products'

const Index = () => {
    return (
            <BrowserRouter>
                <HeaderBs />
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/products"><Products /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route path="*"><PageNotFound /></Route>
                </Switch>
            </BrowserRouter>
    )

}
export default Index;