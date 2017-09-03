import React from 'react';
import CubeCard from './CubeCard';

const CubeList = (props) => {
    const cardItems = props.cards.map((card) => {
        return <CubeCard key={card.id} element={card} />
    });

    return (
        <tbody>
            {cardItems}
        </tbody>
    );
};

export default CubeList;