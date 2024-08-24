import sports from '../images/sports.jpg'

const Home = () => {
    return<div className="container">
        <img src={sports} style={{width:"100%" } } alt='Sports banner'/>
        <div className='center'>
            <h3 className='text-center text-primary display-2 p-3' style={{"font-family": "Impact", "fontSize" : "50px"}}>IPL 2025</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center'>

        <button className='btn btn-warning'>
            Start your betting now!
        </button>
        </div>

    </div>
}

export default Home;
