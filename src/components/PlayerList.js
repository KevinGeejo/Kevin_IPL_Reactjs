import { useEffect, useState } from "react";
import { getPlayer } from "../services/productApiService";
import { Link } from "react-router-dom";

const PlayerList = () => {
    const [playerList, setPlayerList] = new useState([]);
    // const [error, setError] = new useState('')

    useEffect(() => {
        const getData = async () => {
            let data = await getPlayer();
            if (data != null) {
                setPlayerList(data)
            }
        }
        
        getData()
    }, [])

    return <>
    <div className="text-white m-5">

        <h1 className="text-white">List of Players Available {playerList?.length}</h1>
       <div className="m-5">

        {playerList.map((item, i) => <ul className="m-5" key={i}>
            <li>Player Name : {item.playerName}</li>
            <li>Team Id : {item.teamId}</li>
            <li>Role : {item.role}</li>
            <li>Age : {item.age}</li>
            <li>Matches Played : {item.matchesPlayed}</li>
        </ul>)}
       </div>
        </div>
    </>
}

export default PlayerList;