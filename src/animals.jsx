import React from "react";
import { connect } from "react-redux";
import {fetchAnimalData} from "./store/thunks";
import withServerFetch from "./with-server-fetch";

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
        animal: state.animal,
        isServer: state.env.isServer
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    serverFetch: () => dispatch(fetchAnimalData(ownProps.match.params.animalName))
});

export default connect(mapStateToProps, mapDispatchToProps)(withServerFetch(Animals));
