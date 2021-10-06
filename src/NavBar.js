import React from 'react'
import NewPlayerForm from './NewPlayerForm'
import SearchBar from './SearchBar'

export default function NavBar( {addNewPlayer, setSearchPlayer }) {

    return (
        <div>
        <NewPlayerForm addNewPlayer={addNewPlayer}  />
        <SearchBar setSearchPlayer={setSearchPlayer} />
        
        </div>
    )
}
