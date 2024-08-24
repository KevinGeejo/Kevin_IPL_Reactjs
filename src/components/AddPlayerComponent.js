import React, { useState } from 'react';
import { addPlayer } from '../services/productApiService';

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
            <h1 className='text-white'>Add a new Player</h1>
            <form className='form-group text-white' onSubmit={validate}>
                <div className='text-white'>
                    Id: <input className='form-control' value={player.playerId} onChange={onChange} type='number' id='playerId' />
                    {errors.playerId && <span className='text-danger'>{errors.playerId}</span>}
                </div>
                <div>
                    Player Name: <input className='form-control' value={player.playerName} onChange={onChange} type='text' id='playerName' />
                    {errors.playerName && <span className='text-danger'>{errors.playerName}</span>}
                </div>
                <div>
                    Team Id: <input className='form-control' value={player.teamId} onChange={onChange} type='number' id='teamId' />
                    {errors.teamId && <span className='text-danger'>{errors.teamId}</span>}
                </div>
                <div>
                    Role: <input className='form-control' value={player.role} onChange={onChange} type='text' id='role' />
                    {errors.role && <span className='text-danger'>{errors.role}</span>}
                </div>
                <div>
                    Age: <input className='form-control' value={player.age} onChange={onChange} type='number' id='age' />
                    {errors.age && <span className='text-danger'>{errors.age}</span>}
                </div>
                <div>
                    Matches Played: <input className='form-control' value={player.matchesPlayed} onChange={onChange} type='number' id='matchesPlayed' />
                    {errors.matchesPlayed && <span className='text-danger'>{errors.matchesPlayed}</span>}
                </div>
                <button className='btn btn-primary m-2 p-3' type='submit'>Add new Player</button>
            </form>
        </>
    );
};

export default AddPlayerComponent;