import React, { useState, useEffect } from 'react';
import { getMatchStats } from '../services/productApiService';
import Navbar from './NavigationComponent';
const MatchDetails = () => {
  const [matchDetails, setMatchDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
        let data = await getMatchStats();
        if (data != null) {
            setMatchDetails(data)
        }
    }
    
    getData()
}, [])

  return (
    <div className="bg-[#17171f] h-full">

    <Navbar/>
    <div className="text-white m-5 h-full">

        <h1 className="text-white text-lg flex justify-center">Match Details</h1>
        <div className="flex flex-wrap justify-center h-full">
            {matchDetails.map((player, index) => (
                <div key={index} className="w-full h-full md:w-1/2 xl:w-1/3 p-4">
                    <div className="bg-[#d5ad19] rounded shadow-md p-4">
                        {/* <h2 className="text-black text-lg font-bold">{player.playerName}</h2> */}
                        <p className="text-black text-lg font-bold">Match ID: {player.matchId}</p>
                        <p className="text-gray-600">Match Date: {player.matchDate}</p>
                        <p className="text-gray-600">venue: {player.venue}</p>
                        <p className="text-gray-600">Team 1: {player.team1Name}</p>
                        <p className="text-gray-600">Team 2: {player.team2Name}</p>
                        <p className="text-gray-600">Fan Engagements: {player.fanEngagements}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
};

export default MatchDetails;