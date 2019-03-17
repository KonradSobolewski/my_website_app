import React from 'react';
import RepoItem from './RepoItem';
import classes from './RepoList.module.scss'
import Button from '@material-ui/core/Button';

const RepoList = props => (
    <React.Fragment>
        {props.repositories.map(repo => (
            <RepoItem key={repo.id}
                      repository={repo}>
                <div className={classes.DetailsContainer}>
                    <div className={classes.RefreshButton}>
                        <a href={repo.html_url} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Button color='secondary'>Go to repo</Button>
                        </a>
                    </div>
                </div>
            </RepoItem>
        ))}
    </React.Fragment>
);

export default RepoList;