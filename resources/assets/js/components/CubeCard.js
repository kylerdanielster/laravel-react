import React from 'react';

const CubeCard = (card) => {
    return (
        <tr>
            <td>{card.element.id}</td>
            <td>{card.element.name}</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td><button className="btn btn-primary">Remove Card</button></td>
        </tr>
    )
};

export default CubeCard;