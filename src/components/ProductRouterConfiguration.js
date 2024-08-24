import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./HomeComponent"
import AddPlayerComponent from "./AddPlayerComponent"
import PlayerNavigation from "./NavigationComponent" 
import PlayerList from "./PlayerList"



const RouterConfiguration =() => {
    return <BrowserRouter>

<PlayerNavigation/>
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/players" element={<PlayerList/>}/>
           
            <Route path="/players/add" element={<AddPlayerComponent />}/>

        </Routes>
    </BrowserRouter>
}
export default RouterConfiguration;