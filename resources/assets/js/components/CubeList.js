import React from 'react';
import CubeCard from './CubeCard';

const CubeList = (props) => {
    const cardItems = props.cube.map((card) => {
        return <CubeCard removeCard={props.removeCard} key={card.id} element={card} />
    });

    return (
        <tbody>
            {cardItems}
        </tbody>
    );
};

export default CubeList;