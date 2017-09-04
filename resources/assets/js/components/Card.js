import React from 'react';

class Card extends React.Component {
    constructor(){
        super();

        this.addCard = this.addCard.bind(this);
    }

    addCard(e){
        e.preventDefault();
        //console.log('added');
        this.props.addCard();
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 card">
                <img src={this.props.element.imageUrl}/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.addCard}>Add Card</button>
                </div>
            </div>
        )
    }
};

export default Card;