import React from "react";
import { connect } from "react-redux";

class Animals extends React.PureComponent {
    render() {
        const {
            match,
            animal
        } = this.props;
        return (
            <div>
                <div>I am the Animals page for {match.params.animalName}</div>
                <div>The animals size is {animal[0].size}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animal: state.animal
    };
};

export default connect(mapStateToProps)(Animals);
