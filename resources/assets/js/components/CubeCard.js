import React from 'react';

class CubeCard extends React.Component {
    constructor(){
        super();

        this.removeCard = this.removeCard.bind(this);
    }

    removeCard(e){
        e.preventDefault();
        //console.log('removed');
        this.props.removeCard(this.props.element.name);
    }

    render() {
        return (
            <tr>
                <td>{this.props.element.id}</td>
                <td>{this.props.element.name}</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.removeCard}
                    >
                        Remove Card</button>
                </td>
            </tr>
        )
    }
};

export default CubeCard;