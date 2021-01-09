import { Link } from "react-router-dom"

const HeaderBs = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-center">
                <div className="navbar-nav">
                    <Link className="nav-link mx-3 h3" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link mx-3 h3" to="/about">about</Link>
                    <Link className="nav-link mx-3 h3" to="/products">Products</Link>
                </div>
</nav>
        </div >
    )
}
export default HeaderBs