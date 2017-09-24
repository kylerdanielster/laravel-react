import React from 'react';

class CubeCard extends React.Component {
    constructor(){
        super();

        this.removeCard = this.removeCard.bind(this);
    }

    removeCard(e){
        e.preventDefault();
        this.props.removeCard(this.props.element.name);
    }

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
                        className="btn btn-default"
                        onClick={this.removeCard}
                    >Remove Card</button>
                </td>
                <td>
                    <a href={this.props.element.image_uri}
                        data-lightbox={this.props.element.name}
                        data-title={this.props.element.name}
                        className="btn btn-default" role="button"
                    >View Card</a>
                </td>
            </tr>
        )
    }
};

export default CubeCard;
