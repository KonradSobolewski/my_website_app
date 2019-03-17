import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Icon,
    Tooltip
} from '@material-ui/core';
import classes from './RepoItem.module.css';
import Chip from '@material-ui/core/Chip';

const RepoItem = props => (
    <ExpansionPanel>
        <ExpansionPanelSummary classes={{content: classes.Summary}}>

            <div className={classes.textField}>
                {props.repository.name}
            </div>

            <div style={{marginLeft: 'auto'}} className={classes.chip}>
                <Tooltip title='Stargazers'>
                    <Chip icon={<Icon>star</Icon>}
                          label={props.repository.stargazers_count}/>
                </Tooltip>
            </div>

            <div className={classes.chip}>
                {props.repository.language &&
                <Tooltip title='Primary language'>
                    <Chip label={props.repository.language}/>
                </Tooltip>}
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {props.children}
        </ExpansionPanelDetails>
    </ExpansionPanel>
);

export default RepoItem;