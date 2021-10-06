import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function NewPlayerForm({addNewPlayer}) {

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [highlights, setHighlights] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting form")


    const newPlayer = {
        image: image,
        name: name,
        position: position,
        height: height,
        weight: weight,
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
        setImage("");
        setName("");
        setPosition("");
        setHeight("");
        setWeight(0);  
        setHighlights("");
    })

    }

    return (
        <div>
        <h2>New Player</h2>
        <form onSubmit={handleSubmit}>
        <input value={image.image} onChange={(e) => setImage(e.target.value)}  type="text" name="image" placeholder="image URL" />
        <input value={name.name} onChange={(e) => setName(e.target.value)}  type="text" name="name" placeholder="name" />
        <input value={position.position} onChange={(e) => setPosition(e.target.value)}  type="text" name="position" placeholder="position" />
        <input value={height.height} onChange={(e) => setHeight(e.target.value)}  type="text" name="height" placeholder="height" />
        <input value= {weight.weight} onChange={(e) => setWeight(e.target.value)}  type="number" name="weight" placeholder="weight" />
        <input value={highlights.highlights} onChange={(e) => setHighlights(e.target.value)}  type="text" name="highlights" placeholder="highlight link" />
        <button type="submit">Add Player </button>

        </form>
            
        </div>
    )
}
