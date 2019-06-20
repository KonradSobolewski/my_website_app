import React from 'react';
import RepoItem from './RepoItem';
import classes from './RepoList.module.scss'
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade'

const RepoList = props => (
    <React.Fragment>
        {props.repositories.sort(function (a, b) {
            return new Date(b.updated_at) - new Date(a.updated_at)
        }).map(repo => (
            <Fade>
                <RepoItem key={repo.id}
                          repository={repo}>
                    <div className={classes.DetailsContainer}>
                        <div className={classes.detailsContent}>
                            {repo.description}
                        </div>
                        <div className={classes.RefreshButton}>
                            <a href={repo.html_url} target='_blank' rel="noopener noreferrer"
                               style={{textDecoration: 'none'}}>
                                <Button color='secondary'>Go to repo</Button>
                            </a>
                        </div>
                    </div>
                </RepoItem>
            </Fade>
        ))}
    </React.Fragment>
);

export default RepoList;