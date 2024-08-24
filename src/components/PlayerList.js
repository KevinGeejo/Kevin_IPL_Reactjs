import { useEffect, useState } from "react";
import { getPlayer } from "../services/productApiService";
import { Link } from "react-router-dom";
import Navbar from './NavigationComponent';


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
    <div className="bg-[#17171f] h-full">

    <Navbar/>
    <div className="text-white m-5 h-full">

        <h1 className="text-white text-lg">List of Players Available {playerList?.length}</h1>
        <div className="flex flex-wrap justify-center h-full">
            {playerList.map((player, index) => (
                <div key={index} className="w-full h-full md:w-1/2 xl:w-1/3 p-4">
                    <div className="bg-[#d5ad19] rounded shadow-md p-4">
                        <h2 className="text-black text-lg font-bold">{player.playerName}</h2>
                        <p className="text-gray-600">Team ID: {player.teamId}</p>
                        <p className="text-gray-600">Role: {player.role}</p>
                        <p className="text-gray-600">Age: {player.age}</p>
                        <p className="text-gray-600">Matches Played: {player.matchesPlayed}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    </>
}

export default PlayerList;