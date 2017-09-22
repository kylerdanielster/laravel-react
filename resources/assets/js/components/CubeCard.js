import React from 'react';

class CubeCard extends React.Component {
    constructor(){
        super();

        this.removeCard = this.removeCard.bind(this);
        this.viewCard = this.viewCard.bind(this);
    }

    removeCard(e){
        e.preventDefault();
        this.props.removeCard(this.props.element.name);
    }

    viewCard(e){
        e.preventDefault();
        this.props.viewCard(this.props.element);
    }

    // Placeing this here temporarily
                //    <button
                //        type="submit"
                //        className="btn btn-primary"
                //        onClick={this.viewCard}
                //    >View Card</button>
    // The anchor tag should maybe be a form with a button
   render() {
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{this.props.element.name}</td>
                <td>{this.props.element.set}</td>
                <td>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.removeCard}
                    >Remove Card</button>
                </td>
                <td>
                    <a href={this.props.element.image_url}
                        data-lightbox={this.props.element.name}
                        data-title={this.props.element.name}
                    >View Card</a>
                </td>
            </tr>
        )
    }
};

export default CubeCard;
