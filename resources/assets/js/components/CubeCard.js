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
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.viewCard}
                    >View Card</button>
                </td>
            </tr>
        )
    }
};

export default CubeCard;
