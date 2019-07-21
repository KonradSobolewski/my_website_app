import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Tooltip
} from '@material-ui/core';
import classes from './RepoItem.module.scss';
import Chip from '@material-ui/core/Chip';
import {Star} from '@material-ui/icons'

function formatDate(date) {
    let formatted = new Date(date);
    return formatted.toDateString();
}

const RepoItem = props => (
    <ExpansionPanel className={classes.panel} square={true}>
        <ExpansionPanelSummary classes={{content: classes.Summary}}>

            <div className={classes.textField}>
                {props.repository.name}
            </div>

            <div className={classes.hide}>
                <Tooltip title='Stargazers' className={classes.TooltipHide}>
                    <Chip icon={<Star/>}
                          label={props.repository.stargazers_count}
                          color="secondary"/>
                </Tooltip>
            </div>

            <div>
                {props.repository.updated_at &&
                <Tooltip title='Last update' className={classes.Tooltip}>
                    <Chip label={formatDate(props.repository.updated_at)}
                          variant="outlined"
                          color="secondary"/>
                </Tooltip>}
            </div>

            <div>
                {props.repository.language &&
                <Tooltip title='Primary language' className={classes.Tooltip}>
                    <Chip label={props.repository.language}
                          color="primary"/>
                </Tooltip>}
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {props.children}
        </ExpansionPanelDetails>
    </ExpansionPanel>
);

export default RepoItem;