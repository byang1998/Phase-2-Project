import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function NewPlayerForm({addNewPlayer}) {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [image, setImage] = useState("")
    const [highlights, setHighlights] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting form")


    const newPlayer = {
        name: name,
        position: position,
        height: height,
        weight: weight,
        image: image,
        highlights: highlights

    }

    const options = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newPlayer)
    }
    
    fetch('http://localhost:3001/players', options)
    .then(r => r.json())
    .then(newPlayer => {
        addNewPlayer(newPlayer)
        setName("");
        setPosition("");
        setHeight("");
        setWeight(0);
        setImage("");
        setHighlights("");
    })

    }

    return (
        <div>
        <h2>New Player</h2>
        <form onSubmit={handleSubmit}>
        <input value={name.name} onChange={(e) => setName(e.target.value)}  type="text" name="name" placeholder="name" />
        <input value={position.position} onChange={(e) => setPosition(e.target.value)}  type="text" name="position" placeholder="position" />
        <input value={height.height} onChange={(e) => setHeight(e.target.value)}  type="text" name="height" placeholder="height" />
        <input value= {weight.weight} onChange={(e) => setWeight(e.target.value)}  type="number" name="weight" placeholder="weight" />
        <input value={image.image} onChange={(e) => setName(e.target.value)}  type="text" name="image" placeholder="image link" />
        <input value={highlights.highlights} onChange={(e) => setName(e.target.value)}  type="text" name="highlights" placeholder="highlight link" />
        <button type="submit">Add Player </button>

        </form>
            
        </div>
    )
}
