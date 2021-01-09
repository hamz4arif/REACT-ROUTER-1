import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './about'
import Details from './details'
import Header from './header'
import Home from './home'
import Products from './products'
import Main from './profile/main'
const Index = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/about"> <About/></Route>
                <Route exact path="/products"> <Products/></Route>
                <Route path="/products/:id"> <Index/></Route>
                <Route exact path="/profile"> <Main/></Route>
                <Route path='/'><Home/></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Index