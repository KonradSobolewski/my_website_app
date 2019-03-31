import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import * as classes from './infoCard.module.scss'

const InfoCard = props => {
    return (
        <Card className={classes.card} raised={true}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2" align={"center"} className={classes.title}>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h4" gutterBottom align={"center"} className={classes.text}>
                    {props.subtitle}
                </Typography>
                <Typography component="p" gutterBottom className={classes.text}>
                    {props.description}
                </Typography>
                <div>
                    {props.children}
                </div>
            </CardContent>
        </Card>
    )
};

export default InfoCard;