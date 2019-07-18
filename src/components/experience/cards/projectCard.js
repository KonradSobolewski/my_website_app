import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as classes from './projectCard.module.scss'
import TextService from "../../../config/text.service";

const ProjectCard = props => (
    <Card className={classes.card} raised={true}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Company"
                className={props.imageStyle ?  classes.variant : classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h4" align={"center"}>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom align={"center"}>
                    {props.technology}
                </Typography>
                <Typography component="span" gutterBottom>
                    {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => props.learnMoreAction(props.website)}>
                {TextService.text.learnMore}
            </Button>
        </CardActions>
    </Card>
);

export default ProjectCard;