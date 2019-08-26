import React from 'react'
import SearchMenu from "./searchMenu";
import connect from "react-redux/es/connect/connect";
import {CircularProgress} from '@material-ui/core';
import * as classes from './portfolio.module.scss'
import RepoList from './RepoList'
import {Helmet} from "react-helmet";

class Portfolio extends React.Component {
    render() {

        const repoList = (
            <>
                <RepoList repositories={this.props.repositories}/>
            </>
        );
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Portfolio to Konrad Sobolewski, Junior Full Stack Developer</title>
                    <meta name="description" content="Contains fetched projects of Konrad Sobolewski from GitHub"/>
                </Helmet>
                <SearchMenu {...this.props}/>
                {this.props.loading ?
                    (<div className={classes.progress}>
                        <CircularProgress size={100}/>
                    </div>) :
                    this.props.error !== null ? (
                            <div className={classes.progress}>Sorry something went wrong</div>) :
                        repoList
                }
            </>
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