import React from 'react'
import SearchMenu from "./searchMenu";
import connect from "react-redux/es/connect/connect";

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <SearchMenu/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);