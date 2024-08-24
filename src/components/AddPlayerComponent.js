import React, { useState } from 'react';
import { addPlayer } from '../services/productApiService';
import Navbar from './NavigationComponent';


const AddPlayerComponent = () => {
    const [player, setPlayer] = useState({ playerId: 0, playerName: '', teamId: 0, role: '', age: 0, matchesPlayed: 0 });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setPlayer({ ...player, [e.target.id]: e.target.value });
    };

    const validateFields = () => {
        let errors = {};
        if (!player.playerId) errors.playerId = "Player ID is required";
        if (!player.playerName) errors.playerName = "Player Name is required";
        if (!player.teamId) errors.teamId = "Team ID is required";
        if (!player.role) errors.role = "Role is required";
        if (!player.age || player.age <= 0) errors.age = "Valid age is required";
        if (!player.matchesPlayed || player.matchesPlayed < 0) errors.matchesPlayed = "Valid number of matches played is required";
        return errors;
    };

    const createPlayer = async () => {
        let res = await addPlayer(player);
        console.log('Added the player: ' + res);
    };

    const validate = (e) => {
        e.preventDefault();
        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length === 0) {
            createPlayer();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
       <>

        <div className='bg-[#0b0b13]'>

             <Navbar/>
        <div className='bg-[#0b0b13] h-dvh text-white pt-10'>
            <h1 className='text-lg text-white flex justify-center'>Add a new Player</h1>
            

<form class="max-w-md mx-auto" onSubmit={validate}>
  <div class="relative z-0 w-full mb-5 group">
      <input value={player.playerId} onChange={onChange}  id='playerId' name="floating_email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Player Id</label>
      {errors.playerId && <span className='text-red'>{errors.playerId}</span>}
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input value={player.playerName} onChange={onChange} type='text' id='playerName' name="floating_password"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Player Name</label>
      {errors.playerName && <span className='text-red'>{errors.playerName}</span>}
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input value={player.teamId} onChange={onChange}  id='teamId' name="repeat_password"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Team Id</label>
      {errors.teamId && <span className='text-red'>{errors.teamId}</span>}
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input value={player.matchesPlayed} onChange={onChange}  id='matchesPlayed' name="repeat_password"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Matches Played</label>
      {errors.matchesPlayed && <span className='text-danger'>{errors.matchesPlayed}</span>}
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={player.role} onChange={onChange} type='text' id='role' name="floating_first_name"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
        {errors.role && <span className='text-red'>{errors.role}</span>}
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input value={player.age} onChange={onChange}  id='age' name="floating_last_name"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
        {errors.age && <span className='text-red'>{errors.age}</span>}
    </div>
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
        </div>
       </>
    );
};

export default AddPlayerComponent;