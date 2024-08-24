import { Link } from "react-router-dom";

export default function PlayerNavigation(){
    return <nav className="nav navbar justify-between bg-dark text-white ">
            <Link className="nav-link text-white" type="button" to='/'>Home</Link>
            <Link className="nav-link text-white" to='/players'>Players</Link>
            <Link className="nav-link text-white" to='/players/add'>Add</Link>
            
        </nav>
}