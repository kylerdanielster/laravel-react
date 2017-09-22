import React from 'react';
import CubeCard from './CubeCard';

const CubeList = (props) => {
    const cardItems = props.cube.map((card, index) => {
        return <CubeCard removeCard={props.removeCard}
            viewCard={props.viewCard}
            key={card.id}
            element={card}
            count={index+1}
        />
    });

    return (
        <tbody>
            {cardItems}
        </tbody>
    );
};

export default CubeList;
