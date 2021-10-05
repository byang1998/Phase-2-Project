import { useState } from 'react'
import PlayerCard from './PlayerCard'
import NavBar from './NavBar'
import NewPlayerForm from './NewPlayerForm'


export default function PlayerContainer() {

    const [players, setPlayers] = useState([])

    

    return (
        <div>
            {/* <NavBar />
            <NewPlayerForm /> */}
            <PlayerCard />
        </div>
    )
}
