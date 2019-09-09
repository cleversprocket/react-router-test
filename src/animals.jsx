import React from "react";
import { connect } from "react-redux";

class Animals extends React.PureComponent {
    constructor() {
        super();
    }

    componentDidUpdate(prevProps) {
        const {
            dispatch,
            match: {
                params = {},
                url
            },
            route: {
                loadData
            }
        } = this.props;

        const {
            match: {
                url: prevUrl
            }
        } = prevProps;

        if (url !== prevUrl) {

            loadData(
                dispatch,
                params || {}
            );
        }
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
