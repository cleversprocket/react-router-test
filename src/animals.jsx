import React from "react";
import { connect } from "react-redux";

class Animals extends React.PureComponent {
    constructor() {
        super();
    }
    
    render() {
        const {
            match,
            animals,
        } = this.props;

        return (
            <div>
                <div>I am the Animals page for {match.params.animalName}</div>
                <div>The animals size is {animals[0].size}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animals: state.animals
    };
};

export default connect(mapStateToProps)(Animals);
