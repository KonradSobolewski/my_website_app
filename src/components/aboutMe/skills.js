import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as classes from './skills.module.scss'

const Skills = props => {
    return (
        <div className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                    Skills
                </Typography>
                <div className={classes.row}>
                    <div className={classes.title}>
                        Backend:
                    </div>
                    <Typography gutterBottom variant="h5" component="h4" align={"left"} className={classes.typo}>
                        {props.backend}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <div className={classes.title}>
                        Frontend:
                    </div>
                    <Typography gutterBottom variant="h5" component="h4" align={"left"} className={classes.typo}>
                        {props.frontend}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <div className={classes.title}>
                        Mobile:
                    </div>
                    <Typography gutterBottom variant="h5" component="h4" align={"left"} className={classes.typo}>
                        {props.mobile}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <div className={classes.title}>
                        Other:
                    </div>
                    <Typography gutterBottom variant="h5" component="h4" align={"left"} className={classes.typo}>
                        {props.other}
                    </Typography>
                </div>
            </CardContent>
        </div>
    )
};

export default Skills;