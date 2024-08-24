import sports from '../images/sports1.png'
import Navbar from './NavigationComponent';
const Home = () => {
    return<div className="container bg-[#151313]">
        <Navbar/>
        <img src={sports} style={{width:"100%" } } alt='Sports banner'/>
        {/* <div className='center'>
            <h3 className='text-center text-primary display-2 p-3' style={{"font-family": "Impact", "fontSize" : "50px"}}>IPL 2025</h3>
        </div>
        */}

    </div>
}

export default Home;
