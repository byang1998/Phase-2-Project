import React from 'react'

export default function PlayerCard({playerData}) {

    return (
        <div className="card">
            <img src={playerData.image} width= "400" alt={playerData.name} />
            <h3>{playerData.name}</h3>
            <h3>height:{playerData.height}</h3>
            <h3>weight:{playerData.weight}</h3>
            <h3>Position:{playerData.position}</h3>
            <h3>Highlights:{playerData.highlghts}</h3>


        </div>
    )
}
