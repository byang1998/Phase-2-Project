import React from 'react'
import PlayerCard from './PlayerCard';

export default function Wing({players}) {
    console.log(players);

    const playerCards = players.map((playerObj) => {
        return <ul className="cards">{<PlayerCard key={playerObj.id} playerData={playerObj} />}</ul>
    });

   return (
       <div>
           {playerCards}     
       </div>
   )
}
