import React from 'react'
import PlayerCard from './PlayerCard'

export default function PlayerContainer({players})
 {
     const playerCards = players.map((playerObj) => {
         return <PlayerCard key={playerObj.id} playerData={playerObj} />;
     });

    return (
        <div>
            {playerCards}
        </div>
    )
}
