import React from 'react';
import Card from './Card';

/*
 Stateless functional component. 
 We can use these whenever our component does not need to actively 
 track or modify our application's state — in fact, 
 if you're writing idiomatic React code, 
 most of your components will be written this way. 
 The parent component — in this case, App — 
 passes in all of the data our CardList needs via its props. 
 The CardList only needs to worry about how to display this data.

 In React, if you have multiple components of the same type, 
 you should give each a unique key
*/

const CardList = (props) => {
    const cardItems = props.results.map((card) => {
       return <Card addCard={props.addCard} 
                key={card.id} 
                element={card} 
             />
     });
     return ( <div className="row cards"> {cardItems} </div> );

   // return (
   //     <div className="row cards">
   //         <Card addCard={props.addCard}
   //               key={props.results.id}
   //               element={props.results}
   //         />
   //     </div>
   // );
};

export default CardList;
