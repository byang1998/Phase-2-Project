import React from 'react'

export default function PlayerCard({playerData}) {

    const { image, name, height, weight, position, highlights } = playerData;

    return (
        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h3>height:{height}</h3>
            <h3>weight:{weight}</h3>
            <h3>Position:{position}</h3>
            <a href={highlights}>Highlights</a>
           


        </div>
    )
}
