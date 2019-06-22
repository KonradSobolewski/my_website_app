import React from 'react'
import SearchMenu from "./searchMenu";
import connect from "react-redux/es/connect/connect";
import {CircularProgress} from '@material-ui/core';
import * as classes from './portfolio.module.scss'
import RepoList from './RepoList'

class Portfolio extends React.Component {
    render() {

        const repoList = (
            <div>
                <RepoList repositories={this.props.repositories}/>
            </div>
        );
        return (
            <div>
                <SearchMenu {...this.props}/>
                {this.props.loading ?
                    (<div className={classes.progress}>
                        <CircularProgress size={100}/>
                    </div>) :
                    this.props.error !== null ? (
                            <div className={classes.progress}>Sorry something went wrong</div>) :
                        repoList
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.search.loading,
    repositories: state.search.repositories,
    error: state.search.error
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);