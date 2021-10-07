import React from 'react'

export default function SearchBar({setSearchPlayer}) {
    return (
        <div className="Searchclass">
            <label>Search Player:</label>
            <input 
            className="textboxclass"
            type="text"
            id="search"
            placeholder="Type a player to search..."
            onChange={(e) => setSearchPlayer(e.target.value)}
            />
        </div>
    );
}
