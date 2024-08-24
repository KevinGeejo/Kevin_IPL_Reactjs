import axios from 'axios'


async function getPlayer(){
    const URL =`http://localhost:5298/api/Ipl/Get-all-players`
    let data = null;
    try{
        let response = await axios.get(URL)
        if(response.status === 200 && response.data !== null){
            data = await response.data
            console.log("Data from api" + JSON.stringify(data))
        }
        
    }
    catch(error){
        return JSON.stringify(error)
    }
    return data;
}

async function getMatchStats(){
    const URL =`http://localhost:5298/api/Ipl/GetMatchStatistics`
    let data = null;
    try{
        let response = await axios.get(URL)
        if(response.status === 200 && response.data !== null){
            data = await response.data
            console.log("Data from api" + JSON.stringify(data))
        }
        
    }
    catch(error){
        return JSON.stringify(error)
    }
    return data;
}


const addPlayer = async (player)=>{
    const url = `http://localhost:5298/api/Ipl/AddPlayer`
    let data = null
    try{
        let response = await axios.post(url,player,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
        console.log(response.data)
        if (response.status == 200 && response.data !== null) {
            data = await response.data;
            console.log("Data from api" + JSON.stringify(data))
        }
    }
    catch(error){
        return JSON.stringify(error)
    }
    return data;
}



export { getPlayer, addPlayer ,getMatchStats };