import React from 'react';

class Card extends React.Component {
    constructor(){
        super();

        this.addCard = this.addCard.bind(this);
    }

    addCard(e){
        e.preventDefault();
        this.props.addCard(this.props.element);
    }
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 card">
                <img src={this.props.element.image_uri}/>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={this.addCard}
                    >Add Card</button>
                </div>
            </div>
        )
    }
};

export default Card;
