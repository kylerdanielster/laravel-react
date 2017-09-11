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

    render() {
        return (
            <tr>
                <td>{this.props.element.multiverse_id}</td>
                <td>{this.props.element.name}</td>
                <td>{this.props.element.type_line}</td>
                <td>{this.props.element.set_name}</td>
                <td>{this.props.element.rarity}</td>
                <td>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.removeCard}
                    >Remove Card</button>
                </td>
            </tr>
        )
    }
};

export default CubeCard;