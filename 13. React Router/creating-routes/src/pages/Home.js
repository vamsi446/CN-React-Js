import {Link} from "react-router-dom"
function Home(){
    return(<>
    <h1>Home</h1>
    <Link to="/about">About</Link>&nbsp;&nbsp;
    <Link to="/items">Items</Link>
    </>)
}

export default Home;