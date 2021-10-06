import React from 'react'
import NewPlayerForm from './NewPlayerForm'
import SearchBar from './SearchBar'

export default function NavBar( {addNewPlayer }) {

    return (
        <div>
        <NewPlayerForm addNewPlayer={addNewPlayer} />
        </div>
    )
}
