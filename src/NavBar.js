import React from 'react'
import { NavLink } from 'react-router-dom'
import NewPlayerForm from './NewPlayerForm'
import SearchBar from './SearchBar'

export default function NavBar( {addNewPlayer, setSearchPlayer }) {

    return (
        <div>
        <NewPlayerForm addNewPlayer={addNewPlayer}  />
        <SearchBar setSearchPlayer={setSearchPlayer} />
        
        <li><NavLink to="Home">Home</NavLink></li>
        
        <li><NavLink to="Guard">Guard</NavLink></li>

        <li><NavLink to="Wing">Wing</NavLink></li>
        </div>
    )
}
