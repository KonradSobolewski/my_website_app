import React from 'react'
import connect from "react-redux/es/connect/connect";
import Sellions from "./cards/sellions";

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Sellions/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);