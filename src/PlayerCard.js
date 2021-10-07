import React from 'react'

export default function PlayerCard({playerData}) {

    const { image, name, height, weight, position, highlights } = playerData;

    return (


        <div class ="wrap">
        <div className="card">
            <img src={image} alt={name}  />
            <div class="container">
            <h3>{name}</h3>
            <h3>Height:{height}</h3>
            <h3>Weight:{weight}</h3>
            <h3>Position:{position}</h3>
            <a href={highlights}>Highlights</a>
           

        </div>
        </div>
        </div>
    )
}
