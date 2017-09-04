import React from 'react';
import CubeCard from './CubeCard';

// TODO: This is no longer going to be able to be stateless (wrong?)
// TODO: Can/Should I move the buttons to this level? (no make child components class components?)

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