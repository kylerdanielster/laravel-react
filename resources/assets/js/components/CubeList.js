import React from 'react';
import CubeCard from './CubeCard';

// TODO: This is no longer going to be able to be stateless
// TODO: Can/Should I move the buttons to this level?

const CubeList = (props) => {
    const cardItems = props.cube.map((card) => {
        return <CubeCard key={card.id} element={card} />
    });

    return (
        <tbody>
            {cardItems}
        </tbody>
    );
};

export default CubeList;