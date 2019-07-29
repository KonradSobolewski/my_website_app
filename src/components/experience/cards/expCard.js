import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as classes from './expCard.module.scss'
import TextService from "../../../config/text.service";

const ExpCard = props => (
    <Card className={classes.card} raised={true}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Company"
                className={props.imageStyle ? classes.variant : classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {props.description}
                </Typography>
                <Typography component="span" gutterBottom align={"center"} className={classes.stack}>
                   {props.stack}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions  className={classes.cardActions}>
            <div className={classes.date}>
                {props.date}
            </div>
            <div>
            <Button size="small" color="primary" onClick={() => props.learnMoreAction(props.website)}>
                {TextService.text.learnMore}
            </Button>
            </div>
        </CardActions>
    </Card>
);

export default ExpCard;